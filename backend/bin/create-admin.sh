#!/bin/sh

export FLASK_CONFIG="dev"
BIN_DIR=`dirname $0`
PROJECT_ROOT=`readlink -f "${BIN_DIR}/.."`

echo "Creating admin"
. ~/.virtualenvs/${VIRTUALENV}/bin/activate
cd ${PROJECT_ROOT}
./manage.py create_admin -e admin@example.com -p Sekrit
