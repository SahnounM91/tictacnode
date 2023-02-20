import { Player } from "./player.js";
import { Scene } from "./scene.js";

export const startGame = async (scene, playerOne, playerTwo) => {
    scene = new Scene();
    playerOne = new Player(1);
    await playerOne.initialize();

    playerTwo = new Player(2);
    await playerTwo.initialize();

    let whoPlay = 0;

    for (let index = 0; index < 9; index++) {
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