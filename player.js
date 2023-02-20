import inquirer from "inquirer"

const MOVES = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
]

export class Player {
    constructor(turn) {
        this.turn = turn
        this.pseudo = `Player ${turn}`
    }

    init() {
        const answer = inquirer.prompt({
            pseudo: 'pseudo',
            type:'input',
            message: 'who are you ?',
            default: `Player ${this.turn}`
        })

        if (answer.pseudo) {
            this.pseudo = answer.pseudo
        }
    }

    playerMove(scene){
        const isMoveList = MOVES.filter((_,index) => !scene.table[index])
        const answer = inquirer.prompt({
            name: 'move',
            type: "list",
            message: `${this.name} choose your move `,
            choices: isMoveList

        })

        return MOVES.findIndex(move => move === answer.move)
    }
}