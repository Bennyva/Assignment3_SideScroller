/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/bubble.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/Diver.ts" />
/*
*Source File Name: gameover.ts
*Author:Benjamin Vanarragon
*Last Modified: Nov 13th, 2014
*Last Author: Benjamin Vanarragon
*Decsription: this changes the level1 to level2, removes sharks and spawns 1 bubble to signify level2 starting
*
*/
var states;
(function (states) {
    function level2() {
        ocean.update();
        bubble.update();
        Diver.update();

        document.getElementById("canvas").style.cursor = "none";

        for (var count = 0; count < constants.SHARK_NUM; count++) {
            clouds[count].reset();
        }

        scoreboard.update();
    }
    states.level2 = level2;

    function level2Change() {
        var level2Text;

        ocean = new objects.Ocean(game);
        bubble = new objects.Bubble(game);
        Diver = new objects.Diver(game);

        level2Text = new createjs.Text("Level 2", constants.GAME_FONT, constants.FONT_COLOUR);
        level2Text.regX = level2Text.getBounds().width * 0.5;
        level2Text.regY = level2Text.getBounds().height * 0.5;
        level2Text.x = stage.canvas.width * 0.5;
        level2Text.y = stage.canvas.height * 0.5;
        game.addChild(level2Text);

        stage.addChild(game);
    }
    states.level2Change = level2Change;
})(states || (states = {}));
//# sourceMappingURL=level2.js.map
