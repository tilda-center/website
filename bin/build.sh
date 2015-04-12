#!/bin/bash

set -e

PACKAGES="\
    libpq5"

TEMP_PACKAGES="\
    postgresql-server-dev-9.4 \
    python-pip \
    python-dev"

mv /app/sources.list /etc/apt
apt-get update
apt-get install -y ${PACKAGES} ${TEMP_PACKAGES}

cd /app
pip install -r requirements.txt
rm -f Dockerfile Vagrantfile build.sh

apt-get purge -y ${TEMP_PACKAGES}
apt-get autoremove -y --purge
apt-get clean
