from flask_security import RoleMixin, UserMixin
from peewee import Model, CharField, TextField, BooleanField, DateTimeField, ForeignKeyField


class Role(Model, RoleMixin):
    name = CharField(unique=True)
    description = TextField(null=True)

class User(Model, UserMixin):
    email = TextField()
    password = TextField()
    active = BooleanField(default=True)
    confirmed_at = DateTimeField(null=True)

class UserRoles(Model):
    user = ForeignKeyField(User, related_name='roles')
    role = ForeignKeyField(Role, related_name='users')
    name = property(lambda self: self.role.name)
    description = property(lambda self: self.role.description)
