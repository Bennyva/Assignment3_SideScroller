/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/bubble.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/Diver.ts" />
var states;
(function (states) {
    function gameOverState() {
        ocean.update();
    }
    states.gameOverState = gameOverState;

    function GameOver() {
        var gameOverText;
        var ScoreText;

        var playAgain;

        var playAgainIMG = new Image;
        playAgainIMG.src = "/assets/images/playAgain.png";
        game = new createjs.Container();

        ocean = new objects.Ocean(game);

        ScoreText = new createjs.Text(scoreboard.score.toString(), constants.GAME_FONT, constants.FONT_COLOUR);
        ScoreText.regX = ScoreText.getBounds().width * 0.5;
        ScoreText.regY = ScoreText.getBounds().height * 0.5;
        ScoreText.x = stage.canvas.width * 0.5;
        ScoreText.y = 180;
        game.addChild(ScoreText);

        playAgain = new createjs.Bitmap(playAgainIMG);
        playAgain.x = stage.canvas.width * 0.27;
        playAgain.y = stage.canvas.height * 0.6;
        game.addChild(playAgain);

        gameOverText = new createjs.Text("Game Over", constants.GAME_FONT, constants.FONT_COLOUR);
        gameOverText.regX = gameOverText.getBounds().width * 0.5;
        gameOverText.regY = gameOverText.getBounds().height * 0.5;
        gameOverText.x = stage.canvas.width * 0.5;
        gameOverText.y = stage.canvas.height * 0.5;
        game.addChild(gameOverText);

        playAgain.addEventListener("click", function (e) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.MENU_STATE;
            changeState(currentState);
        });

        stage.addChild(game);
    }
    states.GameOver = GameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map
