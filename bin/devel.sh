#!/bin/sh

# Config Section
# --------------
export VIRTUALENV="tilda"

BIN_DIR=`dirname $0`
BACKEND_ROOT=`readlink -f "${BIN_DIR}/../backend"`
FRONTEND_ROOT=`readlink -f "${BIN_DIR}/../frontend"`

tmux new-session -s "tilda" -d "${BACKEND_ROOT}/bin/devel.sh"
tmux splitw -h -p 50 -t 0 -c "${FRONTEND_ROOT}" "${FRONTEND_ROOT}/bin/devel.sh"
tmux a
