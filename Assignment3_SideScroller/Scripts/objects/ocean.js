var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Ocean Class
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        function Ocean(game) {
            _super.call(this, managers.Asset.loader.getResult("ocean"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.game = game;
            this.dy = 5;
            this.game.addChild(this);
            this.reset();
        }
        Ocean.prototype.reset = function () {
            this.x = 0;
        };

        Ocean.prototype.update = function () {
            this.x -= this.dy;
            if (this.x <= -1280) {
                this.reset();
            }
        };
        return Ocean;
    })(createjs.Bitmap);
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map
