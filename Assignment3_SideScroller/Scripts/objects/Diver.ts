// Diver Class
module objects {
    export class Diver extends objects.GameObject {
        constructor(game: createjs.Container) {
            super("diver", game);
            this.y = 430;

            this.game.addChild(this);
        }

        update() {
            this.x = stage.mouseX;
            this.y = stage.mouseY;
        }
    }
}