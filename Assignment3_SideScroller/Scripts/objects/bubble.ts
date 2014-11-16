/*
    *Source File Name: bubbles.ts
    *Author:Benjamin Vanarragon
    *Last Modified: Nov 13th, 2014
    *Last Author: Benjamin Vanarragon
    *Decsription: This class creates the objects for the player to collect
    *
*/

module objects {
    // Bubble Class
    export class Bubble extends objects.GameObject {
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