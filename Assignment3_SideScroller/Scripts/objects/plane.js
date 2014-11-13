var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Diver Class
var objects;
(function (objects) {
    var Diver = (function (_super) {
        __extends(Diver, _super);
        function Diver(game) {
            _super.call(this, "diver", game);
            this.y = 430;

            this.game.addChild(this);
        }
        Diver.prototype.update = function () {
            this.x = stage.mouseX;
            this.y = stage.mouseY;
        };
        return Diver;
    })(objects.GameObject);
    objects.Diver = Diver;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map
