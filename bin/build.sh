#!/bin/sh


export BIN_DIR=`dirname $0`
export PROJECT_ROOT="${BIN_DIR}/.."
. "${PROJECT_ROOT}/services/backend/name.py"
export backend_app_name=${app_name}
. "${PROJECT_ROOT}/services/frontend/name.ini"
export frontend_app_name=${app_name}


rm -rf ${PROJECT_ROOT}/build
mkdir ${PROJECT_ROOT}/build
${PROJECT_ROOT}/services/backend/bin/collect.sh
${PROJECT_ROOT}/services/frontend/bin/collect.sh
cp -r "${PROJECT_ROOT}/services/backend/static" "${PROJECT_ROOT}/build/"
cp -r ${PROJECT_ROOT}/services/frontend/build/* "${PROJECT_ROOT}/build/"
