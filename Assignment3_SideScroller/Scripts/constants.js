/*
*Source File Name: constants.ts
*Author:Benjamin Vanarragon
*Last Modified: Nov 13th, 2014
*Last Author: Benjamin Vanarragon
*Decsription: holds all the constans for the game
*/
var constants;
(function (constants) {
    // game constants
    constants.SHARK_NUM = 2;
    constants.PLAYER_LIVES = 3;
    constants.GAME_FONT = "40px Consolas";
    constants.GAME_INSTRUCTIONS = "20px Consolas";
    constants.FONT_COLOUR = "#FFFFFF";

    // game states
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;
    constants.INSTRUCTIONS_STATE = 3;
    constants.LEVEL2_STATE = 4;
    constants.LEVEL2_STATE_PLAY = 5;
    constants.breathString = "";
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map
