#!/bin/sh

set -e

mkdir /tilda_center/static
mkdir /tilda_center/media
python /app/manage.py collectstatic --noinput
python /app/manage.py migrate
uwsgi --ini /app/uwsgi.ini
