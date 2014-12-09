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
    export class Hearts extends objects.GameObject {
        width: number;
        height: number;
        game: createjs.Container;
        constructor(game: createjs.Container) {
            super(managers.Asset.loader.getResult("ocean"), game);
            this.game = game;
            this.x = 20;
            this.y = 450;
            this.game.addChild(this);
            
        }

        remove() {
            this.game.removeChild(this);
        }

        
    }
} 