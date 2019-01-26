from flask import current_app
from flask_mail import Message
from flask_jwt_extended import jwt_required
from flask_restplus import Resource

from .namespaces import ns_about
from .schemas import AboutSchema


@ns_about.route('/', endpoint='about')
@ns_about.response(404, 'About page not found')
class AboutAPI(Resource):
    @ns_about.expect(AboutSchema.fields(required=False))
    @jwt_required
    def post(self):
        schema = AboutSchema()
        about, errors = schema.load(current_app.api.payload)
        if errors:
            return errors, 409
        msg = Message(
            '[Tilda About]',
            sender=about.email,
            recipients=[current_app.config['MAIL_ADDRESS']],
        )
        msg.body = about.message
        current_app.mail.send(msg)
        return schema.dump(about)
