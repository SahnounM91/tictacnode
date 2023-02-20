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

    //print the new scene
    print() {
        const arr = []
        for (let i = 0; i < 3; i++) {
            let row = []
            for (let j = 0; j < 3; j++) {
                row.push(this.marks[this.table[i * 3 + j]])
            }
            arr.push(row.join(' | '))
        }
        console.log(arr.join('\n') + '\n')
    }


    isWin(player) {
        const winningCombination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < winningCombination.length; i++) {
            const check = winningCombination[i];
            let count = 0;

            for (let i = 0; i < winningCombination.length; i++) {
                if (this.table[check[i]] === player.turn) {
                    count = count + 1
                }
                if (count === 3) {
                    return 3
                }
            }
        }
        return false
    }
}