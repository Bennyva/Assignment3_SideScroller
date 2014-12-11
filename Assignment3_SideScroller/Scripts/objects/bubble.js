/*
*Source File Name: bubbles.ts
*Author:Benjamin Vanarragon
*Last Modified: Nov 13th, 2014
*Last Author: Benjamin Vanarragon
*Decsription: This class creates the objects for the player to collect
*
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Bubble Class
    var Bubble = (function (_super) {
        __extends(Bubble, _super);
        function Bubble(game) {
            _super.call(this, "bubble", game);
            this.dy = 5;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.game.addChild(this);
            this.reset();
        }
        //resets the bubble to the edge of the window
        Bubble.prototype.reset = function () {
            this.x = stage.canvas.width + this.width;
            this.y = Math.floor(Math.random() * stage.canvas.height);
        };

        //moved the bubble to the left
        Bubble.prototype.update = function () {
            this.x -= this.dy;
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
        };
        return Bubble;
    })(objects.GameObject);
    objects.Bubble = Bubble;
})(objects || (objects = {}));
//# sourceMappingURL=bubble.js.map
