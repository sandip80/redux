/// <reference path="../refs.d.ts" />

module Redux {
    export class Game {
        private loadSpriteSheet = Function.prototype.bind(function(name, path, xml) {
            this.game.load.atlasXML(name, path, xml);
        });
        private loadImage = Function.prototype.bind(function(name, path) {
            this.game.load.image(name, path);
        });

        
        game: Phaser.Game;
        
        constructor() {
            this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'body', {
               preload: this.preload, create: this.create
            });
        }
        
        preload() {
            // Spritesheet
            this.loadSpriteSheet('sprite_complete', 'assets/graphics/sprites/spritesheet_complete.png', 'assets/graphics/sprites/spritesheet_complete.xml');
            this.loadSpriteSheet('red_buttons', 'assets/graphics/sprites/redSheet.png', 'assets/graphics/sprites/redSheet.xml');
            
            // Bacgrounds
            this.loadImage('blue_desert', 'assets/graphics/backgrounds/blue_desert.png');
            this.loadImage('blue_grass', 'assets/graphics/backgrounds/blue_grass.png');
            this.loadImage('blue_land', 'assets/graphics/backgrounds/blue_land.png');
            this.loadImage('blue_shroom', 'assets/graphics/backgrounds/blue_shroom.png');
            this.loadImage('colored_desert', 'assets/graphics/backgrounds/colored_desert.png');
            this.loadImage('colored_grass', 'assets/graphics/backgrounds/colored_grass.png');
            this.loadImage('colored_land', 'assets/graphics/backgrounds/colored_land.png');
            this.loadImage('colored_shroom', 'assets/graphics/backgrounds/colored_shroom.png');
            
            // Sounds
        }
        
        create() {
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.state.add('Menu', ReduxMain.Menu, true);
        }
    }
}

// export Game to window
var Game = Redux.Game;

