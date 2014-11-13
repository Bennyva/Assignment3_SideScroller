module objects {
    // Scoreboard Class
    export class Scoreboard {
        label: createjs.Text;
        labelString: string = "";
        game: createjs.Container;
        lives: number = constants.PLAYER_LIVES;
        score: number = 0;
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

        update() {
            this.labelString = "Lives: " + this.lives.toString() + " Score: " + this.score.toString();
            this.label.text = this.labelString;
        }
    }
} 