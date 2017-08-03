#!/bin/sh

export FLASK_CONFIG="dev"
BIN_DIR=`dirname $0`
PROJECT_ROOT=`readlink -f "${BIN_DIR}/.."`

echo "Tilda Backend"
echo "==============="
${PROJECT_ROOT}/manage.py runserver
