import {Command} from 'commander';

const program = new Command();
program
.argument("<filepath>")
.action((filepath)=>{console.log(filepath)});
program.parse();
console.log(program.arguments);

