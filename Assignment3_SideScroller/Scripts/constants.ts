/*
    *Source File Name: constants.ts
    *Author:Benjamin Vanarragon
    *Last Modified: Nov 13th, 2014
    *Last Author: Benjamin Vanarragon
    *Decsription: holds all the constans for the game
*/

module constants {
    // game constants
    export var SHARK_NUM: number = 3;
    export var PLAYER_LIVES: number = 3;
    export var GAME_FONT = "40px Consolas";
    export var GAME_INSTRUCTIONS = "20px Consolas";
    export var FONT_COLOUR = "#FFFFFF";

    // game states
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;
    export var INSTRUCTIONS_STATE: number = 3;
    export var LEVEL2_STATE: number = 4;
    export var LEVEL2_STATE_PLAY: number = 5;
    export var breathString = "";

} 