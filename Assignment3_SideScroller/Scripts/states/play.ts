/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/Diver.ts" />
/// <reference path="../objects/scoreboard.ts" />

module states {

    export function playState() {
        ocean.update();
        island.update();
        Diver.update();

        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            clouds[count].update();
        }

        collisionCheck();

        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }

    export function Play() {

        game = new createjs.Container();

        ocean = new objects.Ocean(game);
        island = new objects.Island(game);
        Diver = new objects.Diver(game);

        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            clouds[count] = new objects.Cloud(game);
        }

        scoreboard = new objects.Scoreboard(game); 

        stage.addChild(game);
    }

} 