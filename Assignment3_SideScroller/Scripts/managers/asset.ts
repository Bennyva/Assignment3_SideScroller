module managers {

    export class Asset{

        static loader;
        static atlas: createjs.SpriteSheet;

        static spriteSheetData = 
        {
            "images": ["/assets/images/atlasDiver.png"],
            "frames": [

                [690, 484, 79, 79],
                [213, 484, 157, 79],
                [372, 484, 157, 79],
                [213, 484, 157, 79],
                [531, 484, 157, 79],
                [2, 2, 1920, 480],
                [2, 484, 209, 150]
            ],
            "animations": {

                "bubble": [0],
                "diver": {
                    frames: [1, 2, 3, 4],
                    speed:0.2
                },
                "ocean": [5],
                "shark": [6]
            },

        }
        static manifest = [
            { id: "ocean", src: "assets/images/ocean.png" },
            { id: "startBtn", src: "assets/images/buttonStart.png" },
            { id: "instructionsBtn", src: "assets/images/buttonInstructions.png" },

            { id: "pop", src: "assets/sounds/pop.wav" },
            { id: "thunder", src: "assets/sounds/thunder.ogg" }

        ];

        static init() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);   
            this.loader.loadManifest(this.manifest);

            this.atlas = new createjs.SpriteSheet(this.spriteSheetData);

        }

   
    }
} 