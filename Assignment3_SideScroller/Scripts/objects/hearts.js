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
    var Hearts = (function (_super) {
        __extends(Hearts, _super);
        function Hearts(game) {
            _super.call(this, managers.Asset.loader.getResult("ocean"), game);
            this.game = game;
            this.x = 20;
            this.y = 450;
            this.game.addChild(this);
        }
        Hearts.prototype.remove = function () {
            this.game.removeChild(this);
        };
        return Hearts;
    })(objects.GameObject);
    objects.Hearts = Hearts;
})(objects || (objects = {}));
//# sourceMappingURL=hearts.js.map
