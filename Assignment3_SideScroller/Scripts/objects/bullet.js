/*
*Source File Name: bullet.ts
*Author:Benjamin Vanarragon
*Last Modified: December 9th, 2014
*Last Author: Benjamin Vanarragon
*Decsription: This class creates bullets
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
    // Ocean Class
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        function Bullet(game) {
            _super.call(this, managers.Asset.loader.getResult("bullet"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = DiverXY.x;
            this.y = DiverXY.y;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.game = game;
            this.dx = 5;
            this.game.addChild(this);
        }
        //resets the image
        Bullet.prototype.remove = function () {
            this.x = 10000;
        };

        //updates the image frame by frame to make it appear as if its moving
        Bullet.prototype.update = function () {
            stage.removeEventListener("click", states.shootBullet);
            this.x += this.dx;
            if (this.x >= (640)) {
                stage.addEventListener("click", states.shootBullet);
                this.remove();
            }
        };
        return Bullet;
    })(createjs.Bitmap);
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map
