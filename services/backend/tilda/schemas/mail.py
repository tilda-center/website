from freenit.schemas.base import BaseSchema
from marshmallow import fields


class MailSchema(BaseSchema):
    bcc = fields.Email(required=False)
    cc = fields.Email(required=False)
    fromAddr = fields.Email(dump_only=True)
    message = fields.String(required=True, load_only=True)
    subject = fields.String(required=True)
    to = fields.Email(required=True)
