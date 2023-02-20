import chalk from "chalk";

export class Scene {
    constructor() {
        this.table = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.borders = [
            chalk.gray('-'),
            chalk.blue('O'),
            chalk.yellow('X')
        ]
    }
}