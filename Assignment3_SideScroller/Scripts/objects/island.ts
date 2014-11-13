module objects {
    // Island Class
    export class Island extends objects.GameObject {
        dy: number;
        constructor(game: createjs.Container) {
            super("bubble", game);
            this.dy = 5;
            this.game.addChild(this);
            this.reset();
        }

        reset() {
            this.x = stage.canvas.width + this.width;
            this.y = Math.floor(Math.random() * stage.canvas.height);
        }

        update() {
            this.x -= this.dy;
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
        }
    }
} 