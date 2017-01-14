/// <reference path="../refs.d.ts" />

module Redux {
    export class Game {
        game: Phaser.Game;

        constructor() {
            this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'body', {
               preload: this.preload, create: this.create, update: this.update
            });
        }
        
        preload() {
            // Spritesheet
            this.game.load.atlasXML('sprite_complete', 'assets/graphics/spritesheet_complete.png', 'assets/graphics/spritesheet_complete.xml');
            
            // Bacgrounds
            this.game.load.image('blue_desert', 'assets/graphics/backgrounds/blue_desert.png');
            this.game.load.image('blue_grass', 'assets/graphics/backgrounds/blue_grass.png');
            this.game.load.image('blue_land', 'assets/graphics/backgrounds/blue_land.png');
            this.game.load.image('blue_shroom', 'assets/graphics/backgrounds/blue_shroom.png');
            this.game.load.image('colored_desert', 'assets/graphics/backgrounds/colored_desert.png');
            this.game.load.image('colored_grass', 'assets/graphics/backgrounds/colored_grass.png');
            this.game.load.image('colored_land', 'assets/graphics/backgrounds/colored_land.png');
            this.game.load.image('colored_shroom', 'assets/graphics/backgrounds/colored_shroom.png');
            
            // Sounds
        }
        
        create() { 
            var background = this.game.add.sprite(0, 0, 'blue_desert');
            background.height = window.innerHeight;
            background.width = background.height * 16 / 9;
            background.x = (window.innerWidth - background.width) / 2;
            var spriteComplete = this.game.add.sprite((window.innerWidth - 128) / 2, (background.height - 256) / 2, 'sprite_complete');
            spriteComplete.animations.add('play', Phaser.Animation.generateFrameNames('alienBlue_walk', 1, 2, '.png'), 7, true);
            spriteComplete.animations.play('play');
        }
        
        update() {
            
        }
    }
}

// export Game to window
var Game = Redux.Game;

