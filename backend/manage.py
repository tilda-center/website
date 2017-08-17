#!/usr/bin/env python
import os

from flask import Flask, render_template
from flask_script import Manager, Server
from flask_security.script import CreateUserCommand

from tilda import TildaCenter
from config import configs
from tilda.models import User, Role, UserRoles


config_name = os.getenv('FLASK_CONFIG') or 'default'
app = Flask(__name__)
app.config.from_object(configs[config_name])
tilda_center = TildaCenter(app)
manager = Manager(tilda_center.app)
manager.add_command(
    "runserver",
    Server(
        host="0.0.0.0",
        use_reloader=True,
        use_debugger=True
    )
)
manager.add_command('create_user', CreateUserCommand)

@manager.command
def init_db():
    """
    Initialize empty DB
    """
    from tilda.factories import AdminFactory
    User.create_table()
    Role.create_table()
    UserRoles.create_table()
    admin = AdminFactory()
    admin.save()
    print('Admin email: {}'.format(admin.email))
    print('Admin password: Sekrit')

@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    manager.run()
