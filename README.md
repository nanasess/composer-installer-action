# Composer installer of Github Actions

<p align="left">
  <a href="https://github.com/nanasess/composer-installer-action"><img alt="GitHub Actions status" src="https://github.com/nanasess/composer-installer-action/workflows/Main%20workflow/badge.svg"></a>
  <a href="https://github.com/nanasess/composer-installer-action/blob/master/LICENSE"><img alt="LICENSE" src="https://img.shields.io/badge/license-MIT-428f7e.svg"></a>
</p>


[Composer](https://getcomposer.org) installer of GitHub Actions.

## OS/Platform support

- ubuntu-latest, ubuntu-20.04, or ubuntu-18.04
- windows-latest, windows-2019, or windows-2016

# Usage

See [action.yml](action.yml)

``` yaml
steps:
- uses: actions/checkout@master
- uses: nanasess/composer-installer-action@master
- run: composer install
```
# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)

# Contributions

Contributions are welcome!  See [Contributor's Guide](docs/contributors.md)

