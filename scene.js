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

    // place X or O in a position

    place(player) {
        const position = player.playerMove(this)

        if (this.table[position] == 0) {
            this.table[position] = player.turn
            return true
        }
        console.log('place not free !!')
        return false
    }


    
}