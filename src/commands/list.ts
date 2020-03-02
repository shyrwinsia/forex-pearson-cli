import { Command, flags } from "@oclif/command";
import chalk from "chalk";

const fs = require("fs");
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

class List extends Command {
  static description = "lists the watchlist entries";

  async run() {
    if (!fs.existsSync("data/watchlist")) {
      this.error("load a watchlist first");
    }

    let rawdata = await readFile("data/watchlist", "utf8");
    let contents = JSON.parse(rawdata);
    contents.forEach((item: any) => {
      let pair: string = item["pair"];
      let selected: boolean = item["selected"];
      let conflict: boolean = item["conflict"];
      let disabled: boolean = item["disabled"];

      if (conflict) this.log(`${chalk.red(pair)}`);
      else if (selected) this.log(`${chalk.green(pair)}`);
      else if (disabled) this.log(`${chalk.dim(pair)}`);
      else this.log(pair);
    });
  }
}

export = List;
