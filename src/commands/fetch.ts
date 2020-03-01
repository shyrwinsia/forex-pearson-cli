import { Command, flags } from '@oclif/command'
import chalk from 'chalk'
import cli from 'cli-ux'

const fs = require('fs')
const request = require('request-promise')
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile);

const URL =
  'https://www.mataf.io/api/tools/csv/correl/snapshot/forex/50/correlation.csv'

class Fetch extends Command {
  static description = 'fetches latest correlations'

  static flags = {
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    watchlist: flags.string({ char: 'w', description: 'file path to watchlist' }),
  }

  async run() {
    const { args, flags } = this.parse(Fetch)
    let csv = await this.getCsvFromUrl(URL)
    let contents = await this.processData(csv)
    await this.writeJsonToFile(contents)
    this.log(`${chalk.green('[Success]')} Data is now up-to-date`)
  }

  async getCsvFromUrl(url: string) {
    cli.action.start(`Fetching correlations`)
    try {
      let contents = await request(url)
      cli.action.stop()
      return contents
    } catch (err) {
      console.log(err)
      this.exit(1)
    }
  }

  processData(contents: string) {
    cli.action.start(`Processing data`)
    let rows: string[]
    let quotes: any[] = []
    let sources: any[] = []

    rows = contents.split('\n')
    rows.forEach((i: string) => {
      let columns: string[]
      columns = i.split(',')
      let source: string = columns[0]
      let target: string = columns[1]
      let daily: number = parseFloat(columns[5])
      if (source !== target && !sources.includes(source.concat(target)) && Math.abs(daily) >= 80) {
        quotes.push({ source: source, target: target, daily: daily })
        sources.push(target.concat(source))
      }
    })
    cli.action.stop()
    return quotes
  }

  async writeJsonToFile(json: object) {
    cli.action.start(`Writing data`)

    if (!fs.existsSync('data')) {
      fs.mkdirSync('data');
    }

    await writeFile('data/correlations', JSON.stringify(json));
    cli.action.stop()
  }
}

export = Fetch
