var Redux;
(function (Redux) {
    var Game = (function () {
        function Game() {
            this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game', {
                create: this.create, preload: this.preload
            });
        }
        Game.prototype.create = function () {
        };
        Game.prototype.preload = function () {
        };
        return Game;
    }());
    Redux.Game = Game;
})(Redux || (Redux = {}));
var Game = Redux.Game;
