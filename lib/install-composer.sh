#!/bin/bash

set -eo pipefail

## see https://getcomposer.org/doc/faqs/how-to-install-composer-programmatically.md
EXPECTED_SIGNATURE="$(curl -s https://composer.github.io/installer.sig)"
curl -s -L https://getcomposer.org/installer > composer-setup.php
ACTUAL_SIGNATURE="$(php -r "echo hash_file('sha384', 'composer-setup.php');")"

if [ "$EXPECTED_SIGNATURE" != "$ACTUAL_SIGNATURE" ]
then
    >&2 echo 'ERROR: Invalid installer signature'
    rm composer-setup.php
    exit 1
fi

COMPOSER_ALLOW_SUPERUSER=1
sudo php composer-setup.php --install-dir=/usr/bin --filename=composer
RESULT=$?
rm composer-setup.php
exit $RESULT
