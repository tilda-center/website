import json

from cryptography.fernet import Fernet
from flask import current_app
from flask_jwt_extended import get_jwt_identity
from flask_smorest import Blueprint
from freenit.api.methodviews import ProtectedMethodView

from ..models.mail import Mail
from ..schemas.mail import MailSchema
from ..utils import sendmail

blueprint = Blueprint('mail', 'mail')


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
