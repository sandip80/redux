var Redux;
(function (Redux) {
    var Game = (function () {
        function Game() {
            this.game = new Phaser.Game(1600, 900, Phaser.AUTO, 'main-game', {
                preload: this.preload, create: this.create
            });
        }
        Game.prototype.preload = function () {
            this.game.load.atlasXML('sprite_complete', 'assets/graphics/sprites/spritesheet_complete.png', 'assets/graphics/sprites/spritesheet_complete.xml');
            this.game.load.atlasXML('red_buttons', 'assets/graphics/sprites/redSheet.png', 'assets/graphics/sprites/redSheet.xml');
            this.game.load.image('blue_desert', 'assets/graphics/backgrounds/blue_desert.png');
            this.game.load.image('blue_grass', 'assets/graphics/backgrounds/blue_grass.png');
            this.game.load.image('blue_land', 'assets/graphics/backgrounds/blue_land.png');
            this.game.load.image('blue_shroom', 'assets/graphics/backgrounds/blue_shroom.png');
            this.game.load.image('colored_desert', 'assets/graphics/backgrounds/colored_desert.png');
            this.game.load.image('colored_grass', 'assets/graphics/backgrounds/colored_grass.png');
            this.game.load.image('colored_land', 'assets/graphics/backgrounds/colored_land.png');
            this.game.load.image('colored_shroom', 'assets/graphics/backgrounds/colored_shroom.png');
        };
        Game.prototype.create = function () {
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.world.enableBody = true;
            if (window.innerWidth > 768 && window.innerWidth / window.innerHeight > 1) {
                this.game.state.add('Menu', ReduxMain.Menu, true);
            }
            else {
                this.game.state.add('Incompatible', ReduxIncompatible.Incompatible, true);
            }
        };
        return Game;
    }());
    Redux.Game = Game;
})(Redux || (Redux = {}));
var Game = Redux.Game;
