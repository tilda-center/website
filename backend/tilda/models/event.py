from flask_security import RoleMixin, UserMixin
from peewee import CharField, TextField, DateTimeField, BooleanField
import datetime
from ..db import db


Model = db.Model


class Event(Model):
    title = CharField()
    markdown = TextField(null=True)
    date = DateTimeField(default=datetime.datetime.now)
    published = BooleanField(default=False)
