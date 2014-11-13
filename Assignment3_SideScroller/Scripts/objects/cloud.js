var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Cloud Class
    var Cloud = (function (_super) {
        __extends(Cloud, _super);
        function Cloud(game) {
            _super.call(this, "shark", game);
            this.game.addChild(this);
            this.reset();
        }
        Cloud.prototype.reset = function () {
            this.x = stage.canvas.width + this.width;
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.dy = Math.floor(Math.random() * 3 - 2);
            this.dx = Math.floor(Math.random() * 3 + 5);
            //
            //
        };

        Cloud.prototype.update = function () {
            this.x -= this.dx;
            this.y -= this.dy;
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
        };
        return Cloud;
    })(objects.GameObject);
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map
