import json

from cryptography.fernet import Fernet
from flask import current_app
from flask_jwt_extended import get_jwt_identity
from flask_smorest import Blueprint, abort
from freenit.api.methodviews import ProtectedMethodView
import imaplib
from sortedcontainers import SortedDict
from socket import gaierror

from ..models.mail import Mail
from ..schemas.mail import MailSchema, MailDirSchema
from ..utils import sendmail

blueprint = Blueprint('mail', 'mail')
host = 'mail.tilda.center'
port = 993


def find_parent(path, folders):
    if len(path) == 2:
        return folders[path[0]]
    return find_parent(path[1:], folders)


def parse_mailbox(data, folders):
    raw_flags, b, c = data.partition(')')
    flags = raw_flags.replace('(', '').replace('\\', '').strip().split()
    separator = c[2]
    folder = c[5:].replace('"', '')
    path = folder.split(separator)
    if len(path) == 1:
        folders[path[0]] = {
            'flags': flags,
            'children': {},
        }
    else:
        parent = find_parent(path, folders)
        parent['children'][path[-1]] = {
            'flags': flags,
            'children': {},
        }


@blueprint.route('', endpoint='list')
class MailListAPI(ProtectedMethodView):
    @blueprint.arguments(MailSchema)
    @blueprint.response(MailSchema)
    def post(self, args):
        """Create mail"""
        mail = Mail(fromAddr='meka@tilda.center', **args)
        root = current_app.config['PROJECT_ROOT']
        key_path = f'{root}/secret.key'
        with open(key_path, 'rb') as key_file:
            key = key_file.read()
            f = Fernet(key)
            data = json.loads(get_jwt_identity())
            password = f.decrypt(data['password'].encode()).decode('utf-8')
            sendmail(current_app.config, mail.to, mail.email, password)
        return mail


@blueprint.route('folders', endpoint='folders')
class MailFolderListAPI(ProtectedMethodView):
    @blueprint.response(MailDirSchema)
    def get(self):
        root = current_app.config['PROJECT_ROOT']
        key_path = f'{root}/secret.key'
        with open(key_path, 'rb') as key_file:
            key = key_file.read()
            f = Fernet(key)
            data = json.loads(get_jwt_identity())
            uid = data['uid']
            domain = data['domain']
            username = f'{uid}@{domain}'
            password = f.decrypt(data['password'].encode()).decode('utf-8')
        folders = SortedDict()
        try:
            imap = imaplib.IMAP4_SSL(host, port)
        except gaierror:
            abort(404, message=f'Host {host} not found!')
        try:
            resp, data = imap.login(username, password)
        except imaplib.IMAP4.error:
            abort(403, message='Login failed!')
        if resp == 'OK':
            resp, data = imap.list('""', '*')
            if resp == 'OK':
                for mbox in data:
                    parse_mailbox(bytes.decode(mbox), folders)
        return {'folders': folders}
