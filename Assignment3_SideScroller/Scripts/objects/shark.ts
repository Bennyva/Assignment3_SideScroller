/*
    *Source File Name: shark.ts
    *Author:Benjamin Vanarragon
    *Last Modified: Nov 13th, 2014
    *Last Author: Benjamin Vanarragon
    *Decsription: This is the shark object. creates the image, and spawns it in a random y value and makes it fly left. 
    *
*/


module objects {
    // Shark Class
    export class Shark extends objects.GameObject {
        dy: number;
        dx: number;
        constructor(game:createjs.Container) {
            super("shark", game);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.game.addChild(this);
            this.reset();
        }
        //this positions it somewhere random on the right  side of the game, with a direction of left
        reset() {
            this.x = stage.canvas.width + this.width;
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.dy = Math.floor(Math.random() * 3 - 2);
            this.dx = Math.floor(Math.random() * 3 + 5);
            //
            // 
        }
        //moves it frame by frame
        update() {
            this.x -= this.dx;
            this.y -= this.dy;
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
        }
    }
} 