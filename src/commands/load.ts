import { Command, flags } from '@oclif/command'
import chalk from 'chalk'
import cli from 'cli-ux'

const fs = require('fs')
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

class Load extends Command {
  static description = 'load a watchlist'

  static flags = {
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args } = this.parse(Load)
    if (!args.file) {
      this.error(`provide a path to the watch file`)
    }

    cli.action.start(`loading watchfile: ${args.file}`)
    let contents: string = await readFile(args.file, 'utf8')

    let rows = contents.split('\n');
    let pairs: object[] = []
    rows.forEach((i: string) => pairs.push({ pair: i }))

    if (!fs.existsSync('data')) {
      fs.mkdirSync('data');
    }

    await writeFile('data/watchlist', JSON.stringify(pairs));
    cli.action.stop()
    this.log(`${chalk.green('watchlist was loaded')}`)
  }
}

export = Load
