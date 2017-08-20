#!/bin/sh

export FLASK_CONFIG="dev"
BIN_DIR=`dirname $0`
PROJECT_ROOT=`readlink -f "${BIN_DIR}/.."`

. ~/.virtualenvs/${VIRTUALENV}/bin/activate
cd ${PROJECT_ROOT}
echo "Migrating DB"
./manage.py db migrate
echo "Creating admin"
./manage.py create_admin -e admin@example.com -p Sekrit
