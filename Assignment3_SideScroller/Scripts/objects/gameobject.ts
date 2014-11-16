/*
    *Source File Name: gameobject.ts
    *Author:Benjamin Vanarragon
    *Last Modified: Nov 13th, 2014
    *Last Author: Benjamin Vanarragon
    *Decsription: This is a super class for all game objects
    *
*/
//creates a constructor for every game object. then the game objects will extend this
module objects {
    export class GameObject extends createjs.Sprite {
        width: number;
        height: number;
        game: createjs.Container;
        constructor(spriteString: string, game: createjs.Container) {
            super(managers.Asset.atlas, spriteString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.game = game;
        }

    }
} 