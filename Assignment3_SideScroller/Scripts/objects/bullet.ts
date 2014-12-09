/*
    *Source File Name: bullet.ts
    *Author:Benjamin Vanarragon
    *Last Modified: December 9th, 2014
    *Last Author: Benjamin Vanarragon
    *Decsription: This class creates bullets
    *
*/



module objects {
    // Ocean Class
    export class Bullet extends createjs.Bitmap {
        width: number;
        height: number;
        game: createjs.Container;
        dx: number;
        constructor(game: createjs.Container) {
            super(managers.Asset.loader.getResult("bullet"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = DiverXY.x;
            this.y = DiverXY.y;
            this.game = game;
            this.dx = 5;
            this.game.addChild(this);
            
        }
        //resets the image 
        remove() {
            this.x = 10000;
            
            
        }
        //updates the image frame by frame to make it appear as if its moving
        update() {
            this.x += this.dx;
            if (this.x >= (640)) {
                this.remove();
            }

        }
    }
} 