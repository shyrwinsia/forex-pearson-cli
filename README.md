forex-pearson-cli
=================

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io) ![License](https://img.shields.io/github/license/shyrwinsia/forex-pearson-cli) ![Last Commit](https://img.shields.io/github/last-commit/shyrwinsia/forex-pearson-cli)

A command-line tool to retrieve the Pearson Correlation Coefficient (PCC) of the world's top traded currency pairs. This can be used to provide insight on what pairs move the same way (or opposite) and help in calculating the risk.

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ yarn
$ forex-pearson-cli COMMAND
running command...
$ forex-pearson-cli (-v|--version|version)
forex-pearson-cli/0.0.0 linux-x64 node-v10.19.0
$ forex-pearson-cli --help [COMMAND]
USAGE
  $ forex-pearson-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`forex-pearson-cli fetch`](#forex-pearson-cli-hello-file)
* [`forex-pearson-cli load [FILE]`](#forex-pearson-cli-load)
* [`forex-pearson-cli help [COMMAND]`](#forex-pearson-cli-help-command)

## `forex-pearson-cli fetch`

fetches latest correlations

```
USAGE
  $ forex-pearson-cli fetch

OPTIONS
  -f, --force
  -h, --help       show CLI help

EXAMPLE
  $ forex-pearson-cli fetch
  Fetching correlations... done
  Processing data... done
  Writing data... done
  [Success] Data is now up-to-date
```

## `forex-pearson-cli load`

loads a watchlist

```
USAGE
  $ forex-pearson-cli load [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help

EXAMPLE
  $ forex-pearson-cli load ~/mywatchlist.txt
  Loading watchfile: /home/user/mywatchlist.txt... done
  [Success] Watchlist was loaded
```

## `forex-pearson-cli help [COMMAND]`

display help for forex-pearson-cli

```
USAGE
  $ forex-pearson-cli [COMMAND]

COMMANDS
  fetch  Fetches latest correlations
  help   display help for forex-pearson-cli
  load   Load a watchlist
```
<!-- commandsstop -->
