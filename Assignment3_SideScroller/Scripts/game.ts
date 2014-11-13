/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/Diver.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />

var stage: createjs.Stage;
var game: createjs.Container;

// game objects
var Diver: objects.Diver;
var island: objects.Island;
var clouds = [];
var ocean: objects.Ocean;
var scoreboard: objects.Scoreboard;

var currentState: number;
var currentStateFunction;



// Preload function
function preload(): void {
    managers.Asset.init();
    managers.Asset.loader.addEventListener("complete", init);
    
}

function init(): void {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);

    currentState = constants.MENU_STATE;
    changeState(currentState);


    gameStart();


}

// Game Loop
function gameLoop(event): void {

    //changeState(currentState);
    currentStateFunction();
    stage.update();
}

function changeState(state: number) {

    switch (state) {
        case constants.MENU_STATE:
            currentStateFunction = states.menuState;
            states.Menu();
            break;
        case constants.PLAY_STATE:
            currentStateFunction = states.playState;
            states.Play();
            break;
        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            states.GameOver();
            break;
        case constants.INSTRUCTIONS_STATE:
            currentStateFunction = states.instructionState;
            states.instruction();
            break;

    }
}









function distance(point1: createjs.Point, point2: createjs.Point):number {
    var p1: createjs.Point;
    var p2: createjs.Point;
    var theXs: number;
    var theYs: number;
    var result: number;

    p1 = new createjs.Point();
    p2 = new createjs.Point();

    p1.x = point1.x;
    p1.y = point1.y;
    p2.x = point2.x;
    p2.y = point2.y;

    theXs = p2.x - p1.x;
    theYs = p2.y - p1.y;

    theXs = theXs * theXs;
    theYs = theYs * theYs;

    result = Math.sqrt(theXs + theYs);

    return result;
}

// Check Collision with Diver and Island
function planeAndIsland() {
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();

    p1.x = Diver.x;
    p1.y = Diver.y;
    p2.x = island.x;
    p2.y = island.y;

    if (distance(p1, p2) <= ((Diver.height * 0.5) + (island.height * 0.5))) {
        createjs.Sound.play("yay");
        scoreboard.score += 100;
        island.reset();
    }
}

// Check Collision with Diver and Cloud
function planeAndCloud(theCloud: objects.Cloud) {
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();
    

    p1.x = Diver.x;
    p1.y = Diver.y;
    p2.x = theCloud.x;
    p2.y = theCloud.y;

    if (distance(p1, p2) <= ((Diver.height * 0.5) + (theCloud.height * 0.5))) {
        createjs.Sound.play("thunder");
        scoreboard.lives -= 1;
        theCloud.reset();
    }
}

function collisionCheck() {
    planeAndIsland();

    for (var count = 0; count < constants.CLOUD_NUM; count++) {
        planeAndCloud(clouds[count]);
    }
}

function gameStart(): void {


    
}