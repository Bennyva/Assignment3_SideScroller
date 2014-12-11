/*
    *Source File Name: diver.ts
    *Author:Benjamin Vanarragon
    *Last Modified: Nov 13th, 2014
    *Last Author: Benjamin Vanarragon
    *Decsription: This creates the player for the game.
    *
*/

module objects {
    //creates the diver object
    export class Diver extends objects.GameObject {
        constructor(game: createjs.Container) {
            super("diver", game);
            this.y = 430;

            this.game.addChild(this);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            createjs.Sound.play("water", 0, 0, 0, -1, 0.2, 0);
            
        
        }
        //updates the player to where the mouse cursor is
        update() {
            this.x = stage.mouseX;
            this.y = stage.mouseY;
        }
    }
}