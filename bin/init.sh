#!/bin/sh

# Config Section
# --------------
export VIRTUALENV="tilda"

BIN_DIR=`dirname $0`
BACKEND_ROOT=`readlink -f "${BIN_DIR}/../backend"`
FRONTEND_ROOT=`readlink -f "${BIN_DIR}/../frontend"`

"${BACKEND_ROOT}/bin/init.sh"
"${FRONTEND_ROOT}/bin/init.sh"
