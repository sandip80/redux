/// <reference path="../../refs.d.ts" />

module ReduxMain {
    export class Menu extends Phaser.State {
        game: Phaser.Game;
        background: Phaser.TileSprite;
        debugText: Phaser.Text;

        constructor() {
            super();
        }
        
        create() {
            this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'colored_desert');
            this.background.tileScale.set(this.background.height / window.innerHeight, this.background.height / window.innerHeight);
            this.debugText = this.game.add.text(0, 0, this.createDebugString(), {font: "32px Arial", fill: '#32cde0', wordWrap: true, wordWrapWidth: this.game.width, align: 'center'});
            // this.background.scale.setTo(this.game.width / this.background.width, this.game.height / this.background.height);
            // var spriteComplete = this.game.add.sprite((window.innerWidth - 128) / 2, (this.background.height - 256) / 2, 'sprite_complete');
            // spriteComplete.animations.add('play', Phaser.Animation.generateFrameNames('alienBlue_walk', 1, 2, '.png'), 7, true);
            // spriteComplete.animations.play('play');
        }
        
        update() {
            this.background.tilePosition.x += 2;
            this.debugText.setText(this.createDebugString());
        }

        createDebugString() {
            return(
                "Game properties:\n" + 
                "Width: " + this.game.width + "\n" + 
                "Height: " + this.game.height + "\n" +
                "Background properties:\n" +
                "Width: " + this.background.width + "\n" + 
                "Height: " + this.background.height
            );
        }
    }
}