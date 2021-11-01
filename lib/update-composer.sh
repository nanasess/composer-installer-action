#!/bin/bash

set -eo pipefail

COMPOSER_ALLOW_SUPERUSER=1

## run as sudo if available
if command -v sudo &> /dev/null
then
    sudo composer selfupdate
else
    composer selfupdate
fi

RESULT=$?
exit $RESULT
