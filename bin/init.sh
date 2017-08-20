#!/bin/sh

# Config Section
# --------------
export VIRTUALENV="tilda"

BIN_DIR=`dirname $0`
BACKEND_ROOT=`readlink -f "${BIN_DIR}/../backend"`

"${BACKEND_ROOT}/bin/init.sh"
