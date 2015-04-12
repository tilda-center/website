#!/bin/sh

set -e

mkdir /tilda_center/static || true
mkdir /tilda_center/media || true
python /app/manage.py collectstatic --noinput
python /app/manage.py createdb --noinput || true
python /app/manage.py migrate --noinput
python /app/manage.py loaddata /app/user.json
uwsgi --ini /app/uwsgi.ini
