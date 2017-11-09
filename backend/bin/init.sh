#!/bin/sh

export FLASK_CONFIG="dev"
BIN_DIR=`dirname $0`
PROJECT_ROOT=`readlink -f "${BIN_DIR}/.."`

if [ ! -d ~/.virtualenvs/${VIRTUALENV} ]; then
    vex --make ${VIRTUALENV} pip install -U pip
fi
. ~/.virtualenvs/${VIRTUALENV}/bin/activate
cd ${PROJECT_ROOT}
pip install -U -r requirements.txt
echo "Migrating DB"
./manage.py db migrate
echo "Creating admin"
./manage.py create_admin -e admin@example.com -p Sekrit
