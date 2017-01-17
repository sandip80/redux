var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ReduxMain;
(function (ReduxMain) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.create = function () {
            this.background = this.game.add.sprite(0, 0, 'blue_desert');
            this.background.scale.setTo(this.game.width / this.background.width, this.game.height / this.background.height);
            var spriteComplete = this.game.add.sprite((window.innerWidth - 128) / 2, (this.background.height - 256) / 2, 'sprite_complete');
            spriteComplete.animations.add('play', Phaser.Animation.generateFrameNames('alienBlue_walk', 1, 2, '.png'), 7, true);
            spriteComplete.animations.play('play');
        };
        return Menu;
    }(Phaser.State));
    ReduxMain.Menu = Menu;
})(ReduxMain || (ReduxMain = {}));
