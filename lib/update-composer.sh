#!/bin/bash

set -eo pipefail

COMPOSER_ALLOW_SUPERUSER=1
composer selfupdate
RESULT=$?
exit $RESULT
