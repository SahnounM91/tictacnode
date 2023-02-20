export const startGame = (scene, playerOne, playerTwo) => {
    scene = new scene();
    playerOne = new player();
    playerOne.initialize();

    playerTwo = New player();
    playerTwo.initialize();

    let whoPlay = 0;

    for (let index = 0; index < 9; index++) {
        const playerturn  = ( whoPlay % 2 +1 === 1 ) ? playerOne : playerTwo
        scene.show()
    }
}