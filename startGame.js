import { Player } from "./player.js"
import { Scene } from "./scene.js"
export const startGame = (scene, playerOne, playerTwo) => {
    scene = new Scene();
    playerOne = new Player(1);
    playerOne.initialize();

    playerTwo = new Player(2);
    playerTwo.initialize();

    let whoPlay = 0;

    for (let index = 0; index < 9; index++) {
        const playerturn = (whoPlay % 2 + 1 === 1) ? playerOne : playerTwo;
        board.place(playerturn);
        scene.show();

        if (scene.isWin(playerturn)) {
            console.log(`${playerturn.pseudo} won!`);
            return;
        }

        turn++;
    }
    console.log('bad game for you both!')
}