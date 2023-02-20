import inquirer from "inquirer";

const MOVES = [
    '0  [0,0]',
    '1  [0,1]',
    '2  [0,2]',
    '3  [1,0]',
    '4  [1,1]',
    '5  [1,2]',
    '6  [2,0]',
    '7  [2,1]',
    '8  [2,2]',
]

export class Player {
    constructor(turn) {
        this.turn = turn
        this.pseudo = `Player ${turn}`
    }

    async initialize() {
        const answer = await inquirer.prompt({
            name: 'pseudo',
            type:'input',
            message: 'who are you ?',
            default: `Player ${this.turn}`
        })

        if (answer.pseudo) {
            this.pseudo = answer.pseudo
        }
    }

   
    async playerMove(scene){
        const isMoveList = MOVES.filter((_,index) => !scene.table[index])
        const answer = await inquirer.prompt({
            name: 'move',
            type: "list",
            message: `${this.pseudo} choose your move `,
            choices: isMoveList

        })

        return MOVES.findIndex(move => move === answer.move)
    }
}