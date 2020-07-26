#!/bin/sh


export BIN_DIR=`dirname $0`
export PROJECT_ROOT="${BIN_DIR}/.."
. "${PROJECT_ROOT}/services/backend/name.py"
export backend_app_name=${app_name}
. "${PROJECT_ROOT}/services/frontend/name.ini"
export frontend_app_name=${app_name}
PASSWORD=`cat ${PROJECT_ROOT}/publish_password.txt`

cd "${PROJECT_ROOT}"
rm -rf ${PROJECT_ROOT}/build
mkdir ${PROJECT_ROOT}/build
cp -r "services/backend/${backend_app_name}/static" "build/"
cp -r services/frontend/build/* "build/"
rsync -P -avcl --delete-after build/ chubby:/usr/cbsd/jails-data/nginx-data/usr/local/www/new.tilda.center/
