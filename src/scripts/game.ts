/// <reference path="../refs.d.ts" />

module Redux {
    export class Game {
        game: Phaser.Game;

        constructor() {
            this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'body', {
               preload: this.preload, update: this.update
            });
        }
        
        preload() {
            // Spritesheers
            
            // Sounds
        }
        
        update() {
            
        }
    }
}

// export Game to window
var Game = Redux.Game;

