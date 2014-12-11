/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/bubble.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/Diver.ts" />
/// <reference path="../objects/scoreboard.ts" />
/*
*Source File Name: play.ts
*Author:Benjamin Vanarragon
*Last Modified: Nov 13th, 2014
*Last Author: Benjamin Vanarragon
*Decsription: This sets the game into action, play state. removes mouse cursor. Updates the score board, and starts checking for collisions
*
*/
var states;
(function (states) {
    //collision checks, removes cursor, updates sharks array
    function playState() {
        ocean.update();
        bubble.update();
        Diver.update();

        document.getElementById("canvas").style.cursor = "none";

        for (var count = 0; count < constants.SHARK_NUM; count++) {
            clouds[count].update();
        }

        collisionCheck();

        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            stage.removeEventListener("click", states.shootBullet);
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        breathCounter.update();

        if (bullet != null) {
            bullet.update();
        }
    }
    states.playState = playState;

    //creates the new objects, creates scoreboard, and adds them to the stage
    function Play() {
        game = new createjs.Container();

        ocean = new objects.Ocean(game);
        bubble = new objects.Bubble(game);
        Diver = new objects.Diver(game);

        stage.addEventListener("click", shootBullet);

        for (var count = 0; count < constants.SHARK_NUM; count++) {
            clouds[count] = new objects.Shark(game);
        }

        scoreboard = new objects.Scoreboard(game);

        breathCounter = new objects.Breathcounter(game);

        stage.addChild(game);
    }
    states.Play = Play;

    //moves the bullet across the screen
    function shootBullet(event) {
        DiverXY.x = Diver.x;
        DiverXY.y = Diver.y;
        if (canFire == false) {
            bullet = new objects.Bullet(game);
            createjs.Sound.play("bulletSound");
        }
    }
    states.shootBullet = shootBullet;
})(states || (states = {}));
//# sourceMappingURL=play.js.map
