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
        };
        Menu.prototype.update = function () {
            this.background.x++;
        };
        return Menu;
    }(Phaser.State));
    ReduxMain.Menu = Menu;
})(ReduxMain || (ReduxMain = {}));
