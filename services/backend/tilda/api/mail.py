from flask import current_app
from flask_smorest import Blueprint
from freenit.api.methodviews import ProtectedMethodView
from ..utils import sendmail

from ..models.mail import Mail
from ..schemas.mail import MailSchema

blueprint = Blueprint('mails', 'mail')


@blueprint.route('', endpoint='list')
class MailListAPI(ProtectedMethodView):
    @blueprint.arguments(MailSchema)
    @blueprint.response(MailSchema)
    def post(self, args):
        """Create mail"""
        mail = Mail(fromAddr='meka@tilda.center', **args)
        sendmail(current_app.config, mail.to, mail.email)
        return mail
