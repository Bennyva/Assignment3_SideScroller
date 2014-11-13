/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/bubble.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/Diver.ts" />
var states;
(function (states) {
    function instructionState() {
        //ocean.update();
        //Diver.update();
    }
    states.instructionState = instructionState;

    /*
    export function Instructions() {
    
    var back: createjs.Bitmap;
    
    var instructionsTitles: createjs.Text;
    var instructionsParag: createjs.Text;
    
    game = new createjs.Container();
    
    ocean = new objects.Ocean(game);
    
    Diver = new objects.Diver(game);
    
    var backBtn = new Image;
    backBtn.src = "/assets/images/backBtn.png";
    
    
    
    
    back = new createjs.Bitmap(backBtn);
    back.x = stage.canvas.width * 0.005;
    back.y = stage.canvas.height * 0.01;
    game.addChild(back);
    
    instructionsTitles = new createjs.Text("INSTRUCTIONS", constants.GAME_FONT, constants.FONT_COLOUR);
    instructionsTitles.x = stage.canvas.width * 0.25;
    instructionsTitles.y = stage.canvas.height * 0.10;
    game.addChild(instructionsTitles);
    
    instructionsParag = new createjs.Text("The goal of the game is to collect as many bubbles as possible without dying. You die when you get bitten by 3 sharks. You get points when you collect bubbles", constants.GAME_FONT, constants.FONT_COLOUR);
    instructionsParag.x = stage.canvas.width * 0.25;
    instructionsParag.y = stage.canvas.height * 0.50;
    game.addChild(instructionsParag);
    
    back.addEventListener("click", function (e) {
    stage.removeChild(game);
    game.removeAllChildren();
    game.removeAllEventListeners();
    currentState = constants.MENU_STATE;
    changeState(currentState);
    });*/
    function Menus() {
        var startGame;

        var instructions;

        game = new createjs.Container();

        ocean = new objects.Ocean(game);

        Diver = new objects.Diver(game);

        var imgStart = new Image;
        imgStart.src = "/assets/images/buttonStart.png";

        var imgInstructions = new Image;
        imgInstructions.src = "/assets/images/buttonInstructions.png";

        startGame = new createjs.Bitmap(imgStart);
        startGame.x = stage.canvas.width * 0.25;
        startGame.y = stage.canvas.height * 0.10;
        game.addChild(startGame);

        instructions = new createjs.Bitmap(imgInstructions);
        instructions.x = stage.canvas.width * 0.18;
        instructions.y = stage.canvas.height * 0.50;
        game.addChild(instructions);

        startGame.addEventListener("click", function (e) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.PLAY_STATE;
            changeState(currentState);
        });

        instructions.addEventListener("click", function (e) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.INSTRUCTIONS_STATE;
            changeState(currentState);
        });

        stage.addChild(game);
    }
    states.Menus = Menus;
})(states || (states = {}));
//# sourceMappingURL=instructions.js.map
