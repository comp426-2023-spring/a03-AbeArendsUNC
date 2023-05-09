import { rps } from '..lib/rpsls.js'
import minimist from 'minimist'

const args = minimist(process.argv.slice(2));

const help = `
Play Rock Paper Scissors
 -h or --help --> Help
 -r or --rules --> show the rules

 Play:
 node-rps --> Return single player rock-paper-scissors result
 node-rps paper --> Return results for game played
`

const rules = `
Rules:
- Rock smashes scissors
- Scissors snip paper
- Paper wraps itself around rock
`

if (args.h || args.help) {
    console.log(rules);
    process.exit(0);
}

if (args.r || args.rules) {
    console.log(help);
    process.exit(0);
}

let choice = args._[0]
try {
    console.log(JSON.stringify(rps(shoot)));
} catch(error) {
    process.exit(1);
}