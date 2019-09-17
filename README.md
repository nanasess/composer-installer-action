# Composer installer of Github Actions

<p align="left">
  <a href="https://github.com/nanasess/composer-installer-action"><img alt="GitHub Actions status" src="https://github.com/nanasess/composer-installer-action/workflows/Main%20workflow/badge.svg"></a>
</p>


[Composer](https://getcomposer.org) installer of GitHub Actions.

# Usage

See [action.yml](action.yml)

``` yaml
steps:
- uses: actions/checkout@master
- uses: nanasess/composer-installer-action@v1
- run: composer install
```
# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)

# Contributions

Contributions are welcome!  See [Contributor's Guide](docs/contributors.md)

