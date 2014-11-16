/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/bubble.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/Diver.ts" />

/*
    *Source File Name: instructions.ts
    *Author:Benjamin Vanarragon
    *Last Modified: Nov 13th, 2014
    *Last Author: Benjamin Vanarragon
    *Decsription: This is the instructions state that shows how to play the game, and a back button to get back to the menu
    *
*/

module states {
    //update the background and diver 
    export function instructionState() {
        ocean.update();
        Diver.update();

        document.getElementById("canvas").style.cursor = "none";
    }
    //add the title, text, and back button, also event listeners for the button
    export function instruction() {
        var startGame: createjs.Bitmap;

        var instructions: createjs.Bitmap;

        game = new createjs.Container();

        ocean = new objects.Ocean(game);

        Diver = new objects.Diver(game);

        var backBtn = new Image;
        backBtn.src = "/assets/images/backBtn.png";

        var instructionsTitle;


        startGame = new createjs.Bitmap(backBtn);
        startGame.x = stage.canvas.width * 0.05;
        startGame.y = stage.canvas.height * 0.05;
        game.addChild(startGame);

        instructionsTitle = new createjs.Text("INSTRUCTIONS", constants.GAME_FONT, constants.FONT_COLOUR);
        instructionsTitle.x = stage.canvas.width * 0.30;
        instructionsTitle.y = stage.canvas.height * 0.30;
        game.addChild(instructionsTitle);

        instructionsTitle = new createjs.Text("Try to collect as many points as possible. Points are \n\ngained from bubbles. Avoid sharks at all costs. When \n\nyou touch a shark you lose a life. You only have 3 \n\nlives", constants.GAME_INSTRUCTIONS, constants.FONT_COLOUR);
        instructionsTitle.x = stage.canvas.width * 0.05;
        instructionsTitle.y = stage.canvas.height * 0.50;
        game.addChild(instructionsTitle);

        startGame.addEventListener("click", function (e) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.MENU_STATE;
            changeState(currentState);
        });

        

        stage.addChild(game);
    }

}  