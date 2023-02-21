
import { gameOn } from '../startGame.js'
import { Scene } from '../scene.js'
//import jest from '@jest/globals';


describe("gameOn", function () {

    it("should return draw game if index == 9", function () {
        const log = spyOn(console, 'log');
        gameOn(new Scene(), { turn: 1, pseudo: 'player one' }, { turn: 2, pseudo: 'player two' }, 9)
        expect(log).toHaveBeenCalledWith('bad game for you both!');

    })

    it("should return ", function () {
        const log = spyOn(console, 'log');
        const scene = new Scene()
        spyOn(scene, 'place').and.returnValue(true);
        spyOn(scene, 'isWin').and.returnValue(3);
        scene.isWin = jasmine.createSpy().and.callFake(function () {
            return 3
        });


        gameOn(scene,
            { turn: 1, pseudo: 'player one' }, { turn: 2, pseudo: 'player two' }, 7)
        expect(log).toHaveBeenCalledWith('bad game for you both!');



    })
})