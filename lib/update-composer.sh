#!/bin/bash

set -eo pipefail

release=$(lsb_release -cs)

COMPOSER_ALLOW_SUPERUSER=1
sudo composer selfupdate
RESULT=$?
exit $RESULT
