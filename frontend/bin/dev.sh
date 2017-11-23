#!/bin/sh

BIN_DIR=`dirname $0`
PROJECT_ROOT=`readlink -f "${BIN_DIR}/.."`
export NODE_ENV="dev"
cd ${PROJECT_ROOT}

yarn install
echo "Tilda Frontend"
echo "=============="
yarn start
