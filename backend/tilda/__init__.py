from flask import Blueprint
from flask_admin import Admin, AdminIndexView
from flask_collect import Collect
from flask_jwt import JWT
from flask_restplus import apidoc
from flask_security import Security, PeeweeUserDatastore
from flask_security.utils import verify_password
from flask_pw import Peewee


current_app = None


class TildaCenter(object):
    """
    Tilda Center APP
    """

    class Result(object):
        def __init__(self, **kwargs):
            for k, v in kwargs.items():
                setattr(self, k, v)

    admin = Admin(
        name='TildaCenter',
        # base_template='admin_master.html',
        template_mode='bootstrap3',
        index_view=AdminIndexView(
            # template='admin/my_index.html',
        ),
    )
    api = None
    app = None
    blueprint = None
    collect = Collect()
    db = None
    jwt = JWT()
    security = Security()
    user_datastore = None

    def __init__(self, app=None):
        global current_app
        current_app = self
        self.app = app
        if self.app is not None:
            self.init_app(app)

    def init_app(self, app):
        self.app = app
        self.db = Peewee(self.app)

        self.jwt.init_app(app)
        self.blueprint = Blueprint(
            'tilda_center',
            __name__,
            template_folder='templates',
            static_folder='static',
            static_url_path='/static/tilda_center',
        )
        self.app.register_blueprint(self.blueprint)

        from api import api_v0, api
        self.api = api
        self.app.register_blueprint(api_v0)
        self.app.register_blueprint(apidoc.apidoc)


        from .models import User, Role, UserRoles
        self.user_datastore = PeeweeUserDatastore(
            self.db,
            User,
            Role,
            UserRoles,
        )

        self.security.init_app(
            self.app,
            self.user_datastore,
        )

        self.admin.init_app(self.app)

    @jwt.authentication_handler
    def authenticate(username, password):
        try:
            user = User.get(email=username)
        except User.DoesNotExist:
            return None
        result = TildaCenter.Result(
            id=user.id,
            email=user.email,
        )
        if verify_password(password, user.password):
            return result

    @jwt.identity_handler
    def identity(payload):
        try:
            user = User.get(id=payload['identity'])
        except User.DoesNotExist:
            user = None
        return user
