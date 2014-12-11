/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/bubble.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/Diver.ts" />

/*
    *Source File Name: menu.ts
    *Author:Benjamin Vanarragon
    *Last Modified: Nov 13th, 2014
    *Last Author: Benjamin Vanarragon
    *Decsription: This is the menu state. It has a button for instructions and to start the game play
    *
*/

module states {
    //update the diver and ocean in the background
    export function menuState() {
        ocean.update();
        Diver.update();

        document.getElementById("canvas").style.cursor = "none";
    }
    //create menu buttons, and place them on the screen and add event listeners that call different states.
    export function Menu() {
        var startGame: createjs.Bitmap;

        var instructions: createjs.Bitmap;

        game = new createjs.Container();

        ocean = new objects.Ocean(game);

        Diver = new objects.Diver(game);

        var imgStart = new Image;
        imgStart.src = "/assets/images/buttonStart.png";

        var imgInstructions = new Image;
        imgInstructions.src = "/assets/images/buttonInstructions.png";

        //creates start button
        startGame = new createjs.Bitmap(imgStart);
        startGame.x = stage.canvas.width * 0.25;
        startGame.y = stage.canvas.height * 0.10;
        game.addChild(startGame);
        //creates instructions btn
        instructions = new createjs.Bitmap(imgInstructions);
        instructions.x = stage.canvas.width * 0.18;
        instructions.y = stage.canvas.height * 0.50;
        game.addChild(instructions);

        //click event listenter
        startGame.addEventListener("click", function (e) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.PLAY_STATE;
            changeState(currentState);
        });

        //click event listener
        instructions.addEventListener("click", function (e) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.INSTRUCTIONS_STATE;
            changeState(currentState);
        });

        stage.addChild(game);
    }

}  