/*
*Source File Name: shark.ts
*Author:Benjamin Vanarragon
*Last Modified: Nov 13th, 2014
*Last Author: Benjamin Vanarragon
*Decsription: This is the shark object. creates the image, and spawns it in a random y value and makes it fly left.
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
    // Shark Class
    var Shark = (function (_super) {
        __extends(Shark, _super);
        function Shark(game) {
            _super.call(this, "shark", game);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.game.addChild(this);
            this.reset();
        }
        //this positions it somewhere random on the right  side of the game, with a direction of left
        Shark.prototype.reset = function () {
            this.x = stage.canvas.width + this.width;
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.dy = Math.floor(Math.random() * 3 - 2);
            this.dx = Math.floor(Math.random() * 3 + 5);
            //
            //
        };

        //moves it frame by frame
        Shark.prototype.update = function () {
            this.x -= this.dx;
            this.y -= this.dy;
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
        };
        return Shark;
    })(objects.GameObject);
    objects.Shark = Shark;
})(objects || (objects = {}));
//# sourceMappingURL=shark.js.map
