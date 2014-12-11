/// <reference path="constants.ts" />
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
*Last Modified: Dec 9th, 2014
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
var bullet;
var level1 = true;
var level2 = true;
var breathCheck = false;
var level3 = true;
var currentState;
var currentStateFunction;
var count = 0;
var lungCapacity = 10;
var runLoop = false;
var DiverXY = new createjs.Point();
var canFire = true;
var bulletCount = 0;

var fullHeart1;
var fullHeart2;
var fullHeart3;
var fullHeart4;
var fullHeart5;

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

    createjs.Sound.play("gameSong", 0, 0, 0, 0, 0.1, 0);
    gameStart();
}

// Game Loop
function gameLoop(event) {
    //changeState(currentState);
    currentStateFunction();
    stage.update();
    breathCounter.update();

    //reset variables
    if (scoreboard.score == 0) {
        level1 = true;
        level2 = true;
        breathCheck = false;
        level3 = true;
        canFire = true;
        constants.breathString = "";
        constants.PLAYER_LIVES = 3;
        breathCounter.breath = 10;

        constants.SHARK_NUM = 2;
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
            addHeartOne();
            addHeartTwo();
            addHeartThree();
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

//add hearts
function addHeartOne() {
    var fullHeartIMG = new Image;
    fullHeartIMG.src = "/assets/images/heartFull.png";

    fullHeart1 = new createjs.Bitmap(fullHeartIMG);
    fullHeart1.x = 0;
    fullHeart1.y = 430;
    game.addChild(fullHeart1);
}

//add hearts
function addHeartTwo() {
    var fullHeartIMG = new Image;
    fullHeartIMG.src = "/assets/images/heartFull.png";

    fullHeart2 = new createjs.Bitmap(fullHeartIMG);
    fullHeart2.x = 50;
    fullHeart2.y = 430;
    game.addChild(fullHeart2);
}

//add hearts
function addHeartThree() {
    var fullHeartIMG = new Image;
    fullHeartIMG.src = "/assets/images/heartFull.png";

    fullHeart3 = new createjs.Bitmap(fullHeartIMG);
    fullHeart3.x = 100;
    fullHeart3.y = 430;
    game.addChild(fullHeart3);
}

//add hearts
function addHeartFour() {
    var fullHeartIMG = new Image;
    fullHeartIMG.src = "/assets/images/heartFull.png";

    fullHeart4 = new createjs.Bitmap(fullHeartIMG);
    fullHeart4.x = 150;
    fullHeart4.y = 430;
    game.addChild(fullHeart4);
}

//add hearts
function addHeartFive() {
    var fullHeartIMG = new Image;
    fullHeartIMG.src = "/assets/images/heartFull.png";

    fullHeart5 = new createjs.Bitmap(fullHeartIMG);
    fullHeart5.x = 200;
    fullHeart5.y = 430;
    game.addChild(fullHeart5);
}

//remove hearts
function removeHeartOne() {
    game.removeChild(fullHeart1);
}

//remove hearts
function removeHeartTwo() {
    game.removeChild(fullHeart2);
}

//remove hearts
function removeHeartThree() {
    game.removeChild(fullHeart3);
}

//remove hearts
function removeHeartFour() {
    game.removeChild(fullHeart4);
}

//remove hearts
function removeHeartFive() {
    game.removeChild(fullHeart5);
}

//changes different settings for level 2
function changeLevelTwo() {
    scoreboard.level = 2;
    while (level1) {
        constants.PLAYER_LIVES = 4;
        runLoop = true;
        scoreboard.lives += 1;
        if (scoreboard.lives == 1) {
            addHeartOne();
        } else if (scoreboard.lives == 2) {
            addHeartTwo();
        } else if (scoreboard.lives == 3) {
            addHeartThree();
        } else if (scoreboard.lives == 4) {
            addHeartFour();
        } else if (scoreboard.lives == 5) {
            addHeartFive();
        }
        level1 = false;

        for (var count = 0; count < constants.SHARK_NUM; count++) {
            resetShark(clouds[count]);
        }

        constants.SHARK_NUM = 4;
        for (var count = 0; count < constants.SHARK_NUM; count++) {
            clouds[count] = new objects.Shark(game);
        }

        window.setInterval(function () {
            breathing();
        }, 1000);
    }
}

//removes 1 second of breath every second
function breathing() {
    breathCheck = true;

    if (scoreboard.level > 1) {
        if (breathCounter.breath <= 0) {
            if (scoreboard.lives == 5) {
                removeHeartFive();
            } else if (scoreboard.lives == 4) {
                removeHeartFour();
            }
            if (scoreboard.lives == 3) {
                removeHeartThree();
            } else if (scoreboard.lives == 2) {
                removeHeartTwo();
            } else if (scoreboard.lives == 1) {
                removeHeartOne();
            }
            scoreboard.lives -= 1;
            createjs.Sound.play("gasp");
            scoreboard.update();
            //play audio file here
        } else {
            breathCounter.breath -= 1;
        }
        constants.breathString = "\nBreath: " + breathCounter.breath;
    }
    console.log(breathCounter.breath);
}

//resets the shark
function resetShark(theShark) {
    theShark.reset();
    game.removeChild(theShark);
}

//changes certain settings for level 3, ex: enables shooting
function changeLevelThree() {
    scoreboard.level = 3;
    while (level2) {
        constants.PLAYER_LIVES = 5;

        scoreboard.lives += 1;
        if (scoreboard.lives == 1) {
            addHeartOne();
        } else if (scoreboard.lives == 2) {
            addHeartTwo();
        } else if (scoreboard.lives == 3) {
            addHeartThree();
        } else if (scoreboard.lives == 4) {
            addHeartFour();
        } else if (scoreboard.lives == 5) {
            addHeartFive();
        }
        level2 = false;
        canFire = false;

        for (var count = 0; count < constants.SHARK_NUM; count++) {
            resetShark(clouds[count]);
        }

        constants.SHARK_NUM = 6;
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
        if (scoreboard.lives == 5) {
            removeHeartFive();
        } else if (scoreboard.lives == 4) {
            removeHeartFour();
        } else if (scoreboard.lives == 3) {
            removeHeartThree();
        } else if (scoreboard.lives == 2) {
            removeHeartTwo();
        } else if (scoreboard.lives == 1) {
            removeHeartOne();
        }

        scoreboard.lives -= 1;
        theShark.reset();
    }
}

//this calls the above collision check functions and loops through checking for collisions
function collisionCheck() {
    diverAndBubble();

    for (var count = 0; count < constants.SHARK_NUM; count++) {
        diverAndShark(clouds[count]);
        if (bullet != null) {
            bulletAndShark(clouds[count], bullet);
        }
    }
}

// Check Collision with bullet and Shark
function bulletAndShark(theShark, theBullet) {
    var p1 = new createjs.Point();
    var p2 = new createjs.Point();

    p1.x = theBullet.x;
    p1.y = theBullet.y;
    p2.x = theShark.x;
    p2.y = theShark.y;

    if (distance(p1, p2) <= ((theBullet.height * 0.5) + (theShark.height * 0.5))) {
        createjs.Sound.play("sharkDeath");

        theBullet.remove();
        theShark.reset();
    }
}

function gameStart() {
}
//# sourceMappingURL=game.js.map
