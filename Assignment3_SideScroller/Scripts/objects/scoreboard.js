/*
*Source File Name: scoreboard.ts
*Author:Benjamin Vanarragon
*Last Modified: Nov 13th, 2014
*Last Author: Benjamin Vanarragon
*Decsription: Adds the scoreboard to the screen and keeps track of the score
*
*/
var objects;
(function (objects) {
    // Scoreboard Class, adds and creats it
    var Scoreboard = (function () {
        function Scoreboard(game) {
            this.labelString = "";
            this.lives = constants.PLAYER_LIVES;
            this.score = 0;
            this.level = 1;
            this.label = new createjs.Text(this.labelString, constants.GAME_FONT, constants.FONT_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;
            this.game = game;

            this.game.addChild(this.label);
        }
        //updates the score to the screen
        Scoreboard.prototype.update = function () {
            this.labelString = "Score: " + this.score.toString() + " Level: " + this.level.toString();
            this.label.text = this.labelString;
        };
        return Scoreboard;
    })();
    objects.Scoreboard = Scoreboard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map
