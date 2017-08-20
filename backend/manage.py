#!/usr/bin/env python
import os

from flask import Flask, render_template
from flask_script import Manager, Server
from flask_security.script import CreateUserCommand

from tilda import TildaCenter
from config import configs


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
manager.add_command('db', tilda_center.db.manager)

@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    manager.run()
