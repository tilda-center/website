from datetime import datetime

from flask import current_app, jsonify, request
from flask.views import MethodView
from flask_jwt_extended import (create_access_token, create_refresh_token,
                                decode_token, get_jwt_identity,
                                jwt_refresh_token_required, set_access_cookies,
                                set_refresh_cookies, unset_jwt_cookies)
from flask_smorest import Blueprint, abort

from ldap3 import Connection, Server
from ldap3.core.exceptions import LDAPSocketOpenError

from ..schemas.user import (LoginSchema, RefreshSchema, ResetSchema,
                            TokenSchema, UserSchema)

blueprint = Blueprint('auth', 'auth')


@blueprint.route('/login', endpoint='login')
class AuthLoginAPI(MethodView):
    @blueprint.response(LoginSchema)
    @blueprint.arguments(TokenSchema)
    def post(self, args):
        """Authenticates and generates a token"""
        email = args.get('email', None)
        password = args.get('password', None)
        if email is None:
            abort(403, message='Email not provided')
        atSign = email.find('@')
        if atSign < 0:
            abort(409, message='Wrong mail format')
        user = email[:atSign]
        domain = email[atSign + 1:]
        identity = f'uid={user},ou={domain},dc=ldap'
        try:
            server = Server(current_app.config['LDAP']['server'])
            conn = Connection(server, identity, password)
            if current_app.config['LDAP']['tls']:
                conn.start_tls()
            if not conn.bind():
                abort(403, mesage='No such user or email/password wrong')
        except LDAPSocketOpenError:
            abort(409, message='Connection to LDAP server failed')
        access_token = create_access_token(identity=identity)
        refresh_token = create_refresh_token(identity=identity)
        access_expire = current_app.config['JWT_ACCESS_TOKEN_EXPIRES']
        refresh_expire = current_app.config['JWT_REFRESH_TOKEN_EXPIRES']
        resp = jsonify({
            'accessExpire': int(access_expire.total_seconds()),
            'refreshExpire': int(refresh_expire.total_seconds()),
        })
        set_access_cookies(resp, access_token)
        set_refresh_cookies(resp, refresh_token)
        refresh_path = current_app.config['JWT_REFRESH_COOKIE_PATH']
        refresh_secure = current_app.config['JWT_COOKIE_SECURE']
        refresh_expire_date = datetime.now() + refresh_expire
        resp.set_cookie(
            'refresh_expire',
            value=str(refresh_expire_date),
            expires=refresh_expire_date,
            path=refresh_path,
            httponly=True,
            secure=refresh_secure,
        )
        return resp


@blueprint.route('/logout', endpoint='logout')
class AuthLogoutAPI(MethodView):
    def post(self):
        """Logout"""
        resp = jsonify({})
        unset_jwt_cookies(resp)
        return resp


@blueprint.route('/refresh', endpoint='refresh')
class AuthRefreshAPI(MethodView):
    @blueprint.response(RefreshSchema)
    @jwt_refresh_token_required
    def post(self):
        """Refresh access token"""
        identity = get_jwt_identity()
        server = Server(current_app.config['LDAP']['server'])
        conn = Connection(server, identity)
        if current_app.config['LDAP']['tls']:
            conn.start_tls()
        #  conn.bind()
        if not conn.search(identity, '(objectclass=person)'):
            abort(403, message='No such user')
        access_expire = current_app.config['JWT_ACCESS_TOKEN_EXPIRES']
        access_token = create_access_token(identity=identity)
        refresh_expire_date = datetime.strptime(
            request.cookies['refresh_expire'], '%Y-%m-%d %H:%M:%S.%f')
        refresh_delta = refresh_expire_date - datetime.now()
        resp = jsonify({
            'accessExpire': int(access_expire.total_seconds()),
            'refreshExpire': int(refresh_delta.total_seconds()),
        })
        set_access_cookies(resp, access_token)
        return resp