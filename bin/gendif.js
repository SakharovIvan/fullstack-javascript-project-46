#!/usr/bin/env node

import { Command } from 'commander';
import makeCheck from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .version('0.1.0')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format (default: "stylish"')
  .helpOption('-h, --help', 'output usage information')
  .action((filepath1, filepath2, option) => {
    const diff = makeCheck(filepath1, filepath2, option.format)
    console.log(diff);
  });

program.parse();