import chalk from "chalk";
import figlet from "figlet";
import startGame from "./startGame"
console.log(figlet.textSync('Tic Tac Node', {
    font: 'Bell',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width:200,
    whitespaceBreak: true
}));

console.log('--------------------------------');
console.log(chalk.red('rules'));
console.log(chalk.green('1 - player one go first'));
console.log(chalk.green('2 - player two go second'));

startGame()