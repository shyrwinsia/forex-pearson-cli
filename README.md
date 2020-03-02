# fxpc

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io) ![License](https://img.shields.io/github/license/shyrwinsia/fxpc) ![Last Commit](https://img.shields.io/github/last-commit/shyrwinsia/fxpc)

**fxpc** (Forex Pearson Correlation) is a command-line tool to retrieve the Pearson Correlation Coefficient (PCC) of the world's top traded currency pairs. This can be used to provide insight on what pairs move the same way (or opposite) and help in calculating the risk.

<!-- toc -->

- [Goals](#goals)
- [Usage](#usage)
- [Commands](#commands)
- [Samples](#samples)
- [Disclaimer](#disclaimer)
  <!-- tocstop -->

## Goals

The aim of this tool is to show at a glance which pairs on a watchlist are correlated. Correlated pairs move together and thus magnifies the risk of positions. It is undesirable to trade in currency pairs that are highly correlated because it exposes the portfolio to more risk than necessary. There are strategies to reduce the trading risk of correlated pairs but it is not within the scope of this tool.

The pairs that are shown by the tool to be not correlated doesn't mean there are no inherent risks. It merely shows it does not move with the rest of the pairs in the watchlist.

## Usage

Use the `fetch` command to retrieve the PCC of the daily ranges of the forex pairs. A watchlist file has to be loaded in order to use the tool. To load the watchfile, use the `load` command. When a watchfile is loaded, the items can be listed with the `list` command.

Any item can be set and unset using the `set` and `unset` commands respectively. The set item will be colored green and the items that have a correlation with the selected item will be grayed out. The grayed out items cannot be selected. The unselectable items are the ones with high correlation to the set items.

When the `fetch` command is called and the previously set items now have a correlation, the green colors will turn into red. This will not return to green until the all but one of the correlated items are unset using the `unset` command.

<!-- usage -->

```sh-session
$ yarn
$ fxpc COMMAND
running command...
$ fxpc (-v|--version|version)
fxpc/0.0.0 linux-x64 node-v10.19.0
$ fxpc --help [COMMAND]
USAGE
  $ fxpc COMMAND
...
```

<!-- usagestop -->

## Commands

<!-- commands -->

- [`fxpc fetch`](#fxpc-fetch)
- [`fxpc load [FILE]`](#fxpc-load-file)
- [`fxpc list`](#fxpc-list)
- [`fxpc set [ITEM]`](#fxpc-set-item)
- [`fxpc unset [ITEM]`](#fxpc-unset-item)
- [`fxpc help [COMMAND]`](#fxpc-help-command)

### `fxpc fetch`

fetches latest correlations

```
USAGE
  $ fxpc fetch

OPTIONS
  -f, --force
  -h, --help       show CLI help

EXAMPLE
  $ fxpc fetch
  fetching correlations... done
  processing data... done
  writing data... done
  data is now up-to-date
```

### `fxpc load [FILE]`

loads a watchlist

```
USAGE
  $ fxpc load [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help

EXAMPLE
  $ fxpc load ~/mywatchlist.txt
  loading watchfile: /home/user/mywatchlist.txt... done
  watchlist was loaded
```

### `fxpc list`

lists the watchlist items

```
USAGE
  $ fxpc list

OPTIONS
  -f, --force
  -h, --help       show CLI help

EXAMPLE
  $ fxpc list
  USDEUR
  USDCHF
  USDGBP
  USDJPY
  EURAUD
  GBPAUD
  AUDJPY
```

### `fxpc set [ITEM]`

sets an item on the watchlist

**WIP**

### `fxpc unset [ITEM]`

unsets an item on the watchlist

**WIP**

### `fxpc help [COMMAND]`

display help for fxpc

```
USAGE
  $ fxpc [COMMAND]

COMMANDS
  fetch  fetches latest correlations
  help   display help for fxpc
  list   lists the watchlist items
  load   loads a watchlist
  set    sets an item on the watchlist
  unset  unsets an item on the watchlist
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
