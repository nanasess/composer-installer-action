#!/bin/bash

set -eo pipefail

COMPOSER_ALLOW_SUPERUSER=1
sudo composer selfupdate
RESULT=$?
exit $RESULT
