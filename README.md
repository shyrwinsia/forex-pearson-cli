# forex-pearson-cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io) ![License](https://img.shields.io/github/license/shyrwinsia/forex-pearson-cli) ![Last Commit](https://img.shields.io/github/last-commit/shyrwinsia/forex-pearson-cli)

A command-line tool to retrieve the Pearson Correlation Coefficient (PCC) of the world's top traded currency pairs. This can be used to provide insight on what pairs move the same way (or opposite) and help in calculating the risk.

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
* [Samples](#samples)
<!-- tocstop -->
## Usage
Use the `fetch` command to retrieve the PCC of the daily ranges of the forex pairs. A watchlist file has to be loaded in order to use the tool. To load the watchfile, use the `load` command. When a watchfile is loaded, the entries can be listed with the `list` command.

Any entry can be toggled using the `set` and `unset` commands. This is meant to reflect a position in the porfolio. The set entry will be colored green and the entries that have a correlation with the selected item will be grayed out. The grayed out items cannot be selected. The unselectable entries are the ones with high correlation to the set entries and thus multiplies the risk of the portfolio.

When the `update` command is called and if two or more items will have a correlation with the latest data, the green colors will turn into red. This will not return to green until one or more of the conflicting entries are toggled using the  `unset` command.

The items in the watchlist that remain active are pairs that do not have correlatation to other entries on the list. This doesn't mean they don't have any risk. It only means they don't multiply the risk of the current positions.

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

### `forex-pearson-cli list`

lists the watchlist entries

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