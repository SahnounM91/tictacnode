import { Player } from "./player.js";
import { Scene } from "./scene.js";

export const startGame = async (scene, playerOne, playerTwo) => {
    scene = new Scene();
    playerOne = new Player(1);
    await playerOne.initialize();
    playerTwo = new Player(2);
    await playerTwo.initialize();
    gameOn(scene, playerOne, playerTwo)
}

export const gameOn = async (scene, playerOne, playerTwo, index = 0) => {

    let whoPlay = 0;
    while (index < 9) {

        const playerturn = (whoPlay % 2 + 1 === 1) ? playerOne : playerTwo;
        await scene.place(playerturn);
        scene.print();

        if (scene.isWin(playerturn)) {
            console.log(`${playerturn.pseudo} won!`);
            return;
        }

        whoPlay++;
    }
    console.log('bad game for you both!')
}