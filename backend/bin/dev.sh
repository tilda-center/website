#!/bin/sh

export FLASK_CONFIG="dev"
BIN_DIR=`dirname $0`
PROJECT_ROOT=`readlink -f "${BIN_DIR}/.."`

echo "Tilda Backend"
echo "==============="
. ~/.virtualenvs/${VIRTUALENV}/bin/activate
cd ${PROJECT_ROOT}
pip install -U -r requirements.txt
./manage.py db migrate
./manage.py runserver
