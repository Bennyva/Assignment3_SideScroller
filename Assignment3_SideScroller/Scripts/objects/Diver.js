/*
*Source File Name: diver.ts
*Author:Benjamin Vanarragon
*Last Modified: Nov 13th, 2014
*Last Author: Benjamin Vanarragon
*Decsription: This creates the player for the game.
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
    var Diver = (function (_super) {
        __extends(Diver, _super);
        function Diver(game) {
            _super.call(this, "diver", game);
            this.y = 430;

            this.game.addChild(this);

            createjs.Sound.play("water", 0, 0, 0, -1, 0.4, 0);
            createjs.Sound.play("gameSong", 0, 0, 0, -1, 0.1, 0);
        }
        //updates the player to where the mouse cursor is
        Diver.prototype.update = function () {
            this.x = stage.mouseX;
            this.y = stage.mouseY;
        };
        return Diver;
    })(objects.GameObject);
    objects.Diver = Diver;
})(objects || (objects = {}));
//# sourceMappingURL=Diver.js.map
