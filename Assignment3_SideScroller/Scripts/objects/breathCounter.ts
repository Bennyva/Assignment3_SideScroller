/*
    *Source File Name: scoreboard.ts
    *Author:Benjamin Vanarragon
    *Last Modified: Nov 13th, 2014
    *Last Author: Benjamin Vanarragon
    *Decsription: Adds the scoreboard to the screen and keeps track of the score
    *
*/


module objects {
    // Scoreboard Class, adds and creats it
    export class Breathcounter {
        label: createjs.Text;
        labelString: string = "";
        game: createjs.Container;
        breath: number = 10;
        width: number;
        height: number;
        constructor(game: createjs.Container) {
            this.label = new createjs.Text(this.labelString, constants.GAME_FONT, constants.FONT_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;
            this.game = game;

            this.game.addChild(this.label);
        }
        //updates the score to the screen
        update() {
            this.labelString = "\n" + constants.breathString;
            this.label.text = this.labelString;
        }
    }
} 