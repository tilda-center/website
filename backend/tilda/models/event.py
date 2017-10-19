from flask_security import RoleMixin, UserMixin
from peewee import CharField, TextField, DateTimeField
from .. import current_app
import datetime


class Event(current_app.db.Model):
    title = CharField()
    markdown = TextField(null=True)
    date = DateTimeField(default=datetime.datetime.now)
