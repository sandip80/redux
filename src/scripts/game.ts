/// <reference path="../refs.d.ts" />

module Redux {
    export class Game {
        game: Phaser.Game;

        constructor() {
            this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'body', {
               create: this.create, preload: this.preload 
            });
        }
        
        create() {
            
        }
        
        preload() {
            
        }
    }
}

// export Game to window
var Game = Redux.Game;

