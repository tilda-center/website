#!/bin/sh

set -e

mkdir -p /tilda_center/static || true
mkdir -p /tilda_center/media || true
python /app/manage.py collectstatic --noinput
python /app/manage.py createdb --noinput || true
python /app/manage.py migrate --noinput
uwsgi --ini /app/uwsgi.ini
