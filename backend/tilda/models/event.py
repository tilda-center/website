from flask_security import RoleMixin, UserMixin
from peewee import CharField, TextField, DateTimeField
from .. import current_app
import datetime


Model = current_app.db.Model


class Event(Model, RoleMixin):
    title = CharField()
    markdown = TextField(null=True)
    date = DateTimeField(default=datetime.datetime.now)
