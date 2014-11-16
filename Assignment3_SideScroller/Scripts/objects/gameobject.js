var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
*Source File Name: gameobject.ts
*Author:Benjamin Vanarragon
*Last Modified: Nov 13th, 2014
*Last Author: Benjamin Vanarragon
*Decsription: This is a super class for all game objects
*
*/
//creates a constructor for every game object. then the game objects will extend this
var objects;
(function (objects) {
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        function GameObject(spriteString, game) {
            _super.call(this, managers.Asset.atlas, spriteString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.game = game;
        }
        return GameObject;
    })(createjs.Sprite);
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map
