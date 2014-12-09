﻿/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/Diver.ts" />
/// <reference path="objects/bubble.ts" />
/// <reference path="objects/shark.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />
/*
*Source File Name: game.ts
*Author:Benjamin Vanarragon
*Last Modified: Dec 3rd, 2014
*Last Author: Benjamin Vanarragon
*Decsription: This is the "main method" that runs the game and loops through the updates at 60 fps
*
*/
var stage;
var game;

// game objects
var Diver;
var bubble;
var clouds = [];
var ocean;
var scoreboard;
var breathCounter;
var level1 = true;
var level2 = true;
var breathCheck = false;
var level3 = true;
var currentState;
var currentStateFunction;
var count = 0;
var lungCapacity = 10;
var runLoop = false;

// Preload function
function preload() {
    managers.Asset.init();
    managers.Asset.loader.addEventListener("complete", init);
}

//initializes the game, called from index.html
function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);

    currentState = constants.MENU_STATE;
    changeState(currentState);

    gameStart();
}

// Game Loop
function gameLoop(event) {
    //changeState(currentState);
    currentStateFunction();
    stage.update();

    if (scoreboard.score == 0) {
        var level1 = true;
        var level2 = true;
        var breathCheck = false;
        var level3 = true;
        constants.breathString = "";

        constants.SHARK_NUM = 3;
        for (var count = 0; count < constants.SHARK_NUM; count++) {
            clouds[count] = new objects.Shark(game);
        }
    }

    if (scoreboard.score == 1000) {
        //level2 = true;
        changeLevelTwo();
    }
    if (scoreboard.score == 3000) {
        changeLevelThree();
    }
}

//switches the states of the game
function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            currentStateFunction = states.menuState;
            states.Play();
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

function changeLevelTwo() {
    scoreboard.level = 2;
    while (level1) {
        constants.PLAYER_LIVES = 4;
        runLoop = true;
        scoreboard.lives += 1;
        level1 = false;

        for (var count = 0; count < constants.SHARK_NUM; count++) {
            resetShark(clouds[count]);
        }

        constants.SHARK_NUM = 5;
        for (var count = 0; count < constants.SHARK_NUM; count++) {
            clouds[count] = new objects.Shark(game);
        }

        window.setInterval(function () {
            breathing();
        }, 1000);
    }
}

function breathing() {
    breathCheck = true;

    if (scoreboard.level == 2) {
        if (breathCounter.breath <= 0) {
            scoreboard.lives -= 0.5;
            //play audio file here
        } else {
            breathCounter.breath -= 1;
        }
        constants.breathString = "\nBreath: " + breathCounter.breath;
    }
}

function resetShark(theShark) {
    theShark.reset();
    game.removeChild(theShark);
}

function changeLevelThree() {
    scoreboard.level = 3;
    while (level2) {
        constants.PLAYER_LIVES = 5;

        scoreboard.lives += 1;
        level2 = false;

        for (var count = 0; count < constants.SHARK_NUM; count++) {
            resetShark(clouds[count]);
        }

        constants.SHARK_NUM = 7;
        for (var count = 0; count < constants.SHARK_NUM; count++) {
            clouds[count] = new objects.Shark(game);
        }
    }
}

//used in collision detection
function distance(point1, point2) {
    var p1;
    var p2;
    var theXs;
    var theYs;
    var result;

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

// Check Collision with Diver and Bubble
function diverAndBubble() {
    var p1 = new createjs.Point();
    var p2 = new createjs.Point();

    p1.x = Diver.x;
    p1.y = Diver.y;
    p2.x = bubble.x;
    p2.y = bubble.y;

    if (distance(p1, p2) <= ((Diver.height * 0.5) + (bubble.height * 0.5))) {
        createjs.Sound.play("pop");
        scoreboard.score += 100;

        bubble.reset();
        if (breathCheck) {
            breathCounter.breath += 3;
        }
    }
}

// Check Collision with Diver and Shark
function diverAndShark(theShark) {
    var p1 = new createjs.Point();
    var p2 = new createjs.Point();

    p1.x = Diver.x;
    p1.y = Diver.y;
    p2.x = theShark.x;
    p2.y = theShark.y;

    if (distance(p1, p2) <= ((Diver.height * 0.5) + (theShark.height * 0.5))) {
        createjs.Sound.play("bite");
        scoreboard.lives -= 1;
        theShark.reset();
    }
}

//this calls the above collision check functions and loops through checking for collisions
function collisionCheck() {
    diverAndBubble();

    for (var count = 0; count < constants.SHARK_NUM; count++) {
        diverAndShark(clouds[count]);
    }
}

function gameStart() {
}
//# sourceMappingURL=game.js.map
