/// <reference path="../../refs.d.ts" />

module ReduxMain {
    export class Menu extends Phaser.State {
        game: Phaser.Game;
        background: Phaser.Sprite;
        
        constructor() {
            super();
        }
        
        create() {
            this.background = this.game.add.sprite(0, 0, 'blue_desert');
            // this.background = this.game.add.sprite(200, 0, 'blue_grass');
            // this.background = this.game.add.sprite(400, 0, 'blue_land');
            // this.background - this.game.add.sprite(600, 0, 'blue_shroom');
            // this.background.scale.setTo(this.game.width / this.background.width, this.game.height / this.background.height);
            // var spriteComplete = this.game.add.sprite((window.innerWidth - 128) / 2, (this.background.height - 256) / 2, 'sprite_complete');
            // spriteComplete.animations.add('play', Phaser.Animation.generateFrameNames('alienBlue_walk', 1, 2, '.png'), 7, true);
            // spriteComplete.animations.play('play');
        }
        
        update() {
            this.background.x++;
        }
    }
}