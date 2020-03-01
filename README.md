# forex-pearson-cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io) ![License](https://img.shields.io/github/license/shyrwinsia/forex-pearson-cli) ![Last Commit](https://img.shields.io/github/last-commit/shyrwinsia/forex-pearson-cli)

A command-line tool to retrieve the Pearson Correlation Coefficient (PCC) of the world's top traded currency pairs. This can be used to provide insight on what pairs move the same way (or opposite) and help in calculating the risk.

<!-- toc -->
* [Goals](#goals)
* [Usage](#usage)
* [Commands](#commands)
* [Samples](#samples)
* [Disclaimer](#disclaimer) 
<!-- tocstop -->
## Goals
The aim of this tool is to show at a glance which pairs on the watchlist are correlated. Correlated pairs move together and thus magnifies the risk of positions. It is undesirable to trade in currency pairs that are highly correlated. This exposes the portfolio to more risk than necessary. 

The pairs that are shown by the tool to be not correlated doesn't mean there are no inherent risks. It merely shows it does not move with the rest of the pairs in the watchlist.

## Usage
Use the `fetch` command to retrieve the PCC of the daily ranges of the forex pairs. A watchlist file has to be loaded in order to use the tool. To load the watchfile, use the `load` command. When a watchfile is loaded, the items can be listed with the `list` command.

Any item can be set and unset using the `set` and `unset` commands respectively. The set item will be colored green and the items that have a correlation with the selected item will be grayed out. The grayed out items cannot be selected. The unselectable items are the ones with high correlation to the set items.

When the `fetch` command is called and the previously set items now have a correlation, the green colors will turn into red. This will not return to green until the all but one of the correlated items are unset using the `unset` command.
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
## Commands
<!-- commands -->
* [`forex-pearson-cli fetch`](#forex-pearson-cli-fetch)
* [`forex-pearson-cli load [FILE]`](#forex-pearson-cli-load-file)
* [`forex-pearson-cli list`](#forex-pearson-cli-list)
* [`forex-pearson-cli set [ITEM]`](#forex-pearson-cli-set-item)
* [`forex-pearson-cli load [ITEM]`](#forex-pearson-cli-unset-item)
* [`forex-pearson-cli help [COMMAND]`](#forex-pearson-cli-help-command)

### `forex-pearson-cli fetch`

fetches latest correlations

```
USAGE
  $ forex-pearson-cli fetch

OPTIONS
  -f, --force
  -h, --help       show CLI help

EXAMPLE
  $ forex-pearson-cli fetch
  fetching correlations... done
  processing data... done
  writing data... done
  data is now up-to-date
```

### `forex-pearson-cli load [FILE]`

loads a watchlist

```
USAGE
  $ forex-pearson-cli load [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help

EXAMPLE
  $ forex-pearson-cli load ~/mywatchlist.txt
  loading watchfile: /home/user/mywatchlist.txt... done
  watchlist was loaded
```

### `forex-pearson-cli set [ITEM]`

sets an item on the watchlist

**WIP**

### `forex-pearson-cli unset [ITEM]`

unsets an item on the watchlist

**WIP**

### `forex-pearson-cli list`

lists the watchlist items

```
USAGE
  $ forex-pearson-cli load [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help

EXAMPLE
  $ forex-pearson-cli list
  USDEUR
  USDCHF
  USDGBP
  USDJPY
  EURAUD
  GBPAUD
  AUDJPY
```

### `forex-pearson-cli help [COMMAND]`

display help for forex-pearson-cli

```
USAGE
  $ forex-pearson-cli [COMMAND]

COMMANDS
  fetch  Fetches latest correlations
  help   display help for forex-pearson-cli
  load   load a watchlist
```
<!-- commandsstop -->
## Samples
### Watchlist file
```
USDEUR
USDCHF
USDGBP
USDJPY
EURAUD
GBPAUD
AUDJPY
```
## Disclaimer
The information from this tool is not intended as, and shall not be understood or construed as, financial advice. I am not an attorney or a financial advisor, nor am I holding myself out to be. The information from this tool is not a substitute for financial advice from a professional. Nothing from this tool should be understood as a recommendation that you should not consult a financial professional. It is expressly recommended to seek advice from a professional.
