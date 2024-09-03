#!/usr/bin/env node
import { Command } from "commander";
import makeCheck from "../src/index.js";
const program = new Command();

program
  .version("0.1.0")
  .description("Compares two configuration files and shows a difference.")
  .argument("<filepath1>")
  .argument("<filepath2>")
  .option("-f, --format <type>", 'output format (default: "stylish"')
  .helpOption("-h, --help", "output usage information")
  .action((filepath1, filepath2, option) => {
    console.log(makeCheck(filepath1, filepath2, option.format));
  });

program.parse();
