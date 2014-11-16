/*
    *Source File Name: ocean.ts
    *Author:Benjamin Vanarragon
    *Last Modified: Nov 13th, 2014
    *Last Author: Benjamin Vanarragon
    *Decsription: Creates the ocean/ background for the game, that scrolls and updates the image
    *
*/

module objects {
    // Ocean Class
    export class Ocean extends createjs.Bitmap {
        width: number;
        height: number;
        game: createjs.Container;
        dy: number;
        constructor(game: createjs.Container) {
            super(managers.Asset.loader.getResult("ocean"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.game = game;
            this.dy = 5;
            this.game.addChild(this);
            this.reset();
        }
        //resets the image 
        reset() {
            this.x = 0;
        }
        //updates the image frame by frame to make it appear as if its moving
        update() {
            this.x -= this.dy;
            if (this.x <= -1280) {
                this.reset();
            }

        }
    }
} 