const {Command} =require('commander')

const program = new Command();

program
.version('0.1.0')
.helpOption('-h, --help','output usage information');

program.parse()