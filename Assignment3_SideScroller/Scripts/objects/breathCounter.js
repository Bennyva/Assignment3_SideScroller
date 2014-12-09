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
    var Breathcounter = (function () {
        function Breathcounter(game) {
            this.labelString = "";
            this.breath = 10;
            this.label = new createjs.Text(this.labelString, constants.GAME_FONT, constants.FONT_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;
            this.game = game;

            this.game.addChild(this.label);
        }
        //updates the score to the screen
        Breathcounter.prototype.update = function () {
            this.labelString = "\n" + constants.breathString;
            this.label.text = this.labelString;
        };
        return Breathcounter;
    })();
    objects.Breathcounter = Breathcounter;
})(objects || (objects = {}));
//# sourceMappingURL=breathCounter.js.map
