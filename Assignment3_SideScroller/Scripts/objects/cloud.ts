module objects {
    // Cloud Class
    export class Cloud extends objects.GameObject {
        dy: number;
        dx: number;
        constructor(game:createjs.Container) {
            super("shark", game);
            this.game.addChild(this);
            this.reset();
        }

        reset() {
            this.x = stage.canvas.width + this.width;
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.dy = Math.floor(Math.random() * 3 - 2);
            this.dx = Math.floor(Math.random() * 3 + 5);
            //
            // 
        }

        update() {
            this.x -= this.dx;
            this.y -= this.dy;
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
        }
    }
} 