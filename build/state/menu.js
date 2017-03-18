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
            this.map = [
                '--------------------------------------------------',
                '                                                  ',
                '                                                  ',
                '                                                  ',
                '                                                  ',
                '                   _    _          = = =     _    ',
                '    )(       )====                 + + +  s   )==(',
                '====/\\]  [] [/++++  _ _ _ [] [] [] + + + == [=/++\\=',
                '--------------------------------------------------'
            ];
            this.tileMap = {};
            this.entityMap = {};
        }
        Menu.prototype.create = function () {
            this.game.world.setBounds(0, 0, 6400, 896);
            this.background = this.game.add.tileSprite(0, -window.innerHeight / 10, this.game.width * 5, this.game.height * 2, 'colored_desert');
            this.title = this.game.add.text(this.game.width / 2 + this.game.width * 3, this.game.height / 2, 'Redux', { font: "32px Arial" });
            this.createMap();
            this.entity = this.game.add.sprite(this.game.width / 2, this.game.height / 2, '');
            this.game.camera.x += this.game.width * 3;
            this.entityMap['worm'] = this.game.add.sprite(this.game.width * 3, 0, 'sprite_complete');
            this.entityMap['worm'].animations.add('move', Phaser.Animation.generateFrameNames('wormPink', 1, 2, '.png'), 2, true);
            this.entityMap['worm'].animations.play('move');
            this.entityMap['worm'].body.gravity.y += 9.8;
        };
        Menu.prototype.createMap = function () {
            for (var i = 0; i < this.map.length; i++) {
                for (var j = 0; j < this.map[i].length; j++) {
                    if (this.map[i][j] == '-' || this.map[i][j] == '+') {
                        this.createTileOnMap(0 + 128 * j, -128 + 128 * i, 'sprite_complete', 'grassCenter.png', true);
                    }
                    else if (this.map[i][j] == '=') {
                        this.createTileOnMap(0 + 128 * j, -128 + 128 * i, 'sprite_complete', 'grassMid.png', true);
                    }
                    else if (this.map[i][j] == ']') {
                        this.createTileOnMap(0 + 128 * j, -128 + 128 * i, 'sprite_complete', 'grassRight.png', true);
                    }
                    else if (this.map[i][j] == '[') {
                        this.createTileOnMap(0 + 128 * j, -128 + 128 * i, 'sprite_complete', 'grassLeft.png', true);
                    }
                    else if (this.map[i][j] == '/') {
                        this.createTileOnMap(0 + 128 * j, -128 + 128 * i, 'sprite_complete', 'grassCorner_right.png', true);
                    }
                    else if (this.map[i][j] == '\\') {
                        this.createTileOnMap(0 + 128 * j, -128 + 128 * i, 'sprite_complete', 'grassCorner_left.png', true);
                    }
                    else if (this.map[i][j] == '(') {
                        this.createTileOnMap(0 + 128 * j, -128 + 128 * i, 'sprite_complete', 'grassHill_left.png', true);
                    }
                    else if (this.map[i][j] == ')') {
                        this.createTileOnMap(0 + 128 * j, -128 + 128 * i, 'sprite_complete', 'grassHill_right.png', true);
                    }
                    else if (this.map[i][j] == '_') {
                        this.createTileOnMap(0 + 128 * j, -128 + 128 * i, 'sprite_complete', 'grass.png', true);
                    }
                }
            }
        };
        Menu.prototype.createTileOnMap = function (x, y, spriteSheet, spriteFrame, immovable) {
            var tile = this.game.add.sprite(x, y, spriteSheet);
            tile.frameName = spriteFrame;
            tile.body.immovable = immovable;
            if (this.tileMap[spriteSheet] == null) {
                this.tileMap[spriteSheet] = {};
            }
            else if (this.tileMap[spriteSheet][spriteFrame] == null) {
                this.tileMap[spriteSheet][spriteFrame] = {};
            }
            else if (this.tileMap[spriteSheet][spriteFrame][x] == null) {
                this.tileMap[spriteSheet][spriteFrame][x] = {};
            }
            else {
                this.tileMap[spriteSheet][spriteFrame][x][y] = tile;
            }
        };
        Menu.prototype.beautifyText = function (text) {
        };
        Menu.prototype.update = function () {
            var _this = this;
            for (var spriteSheet in this.tileMap) {
                for (var sprite in this.tileMap[spriteSheet]) {
                    for (var x in this.tileMap[spriteSheet][sprite]) {
                        for (var y in this.tileMap[spriteSheet][sprite][x]) {
                            var tile = this.tileMap[spriteSheet][sprite][x][y];
                            for (var entity in this.entityMap) {
                                console.log(this.entityMap[entity].body.velocity);
                                this.game.physics.arcade.collide(entity, tile, function (entity, tile) {
                                    _this.entityMap[entity].body.velocity = 0;
                                });
                            }
                        }
                    }
                }
            }
            this.background.tilePosition.x -= 2;
        };
        Menu.prototype.createDebugString = function () {
            return ("Game properties:\n" +
                "Width: " + this.game.width + "\n" +
                "Height: " + this.game.height + "\n" +
                "Background properties:\n" +
                "Width: " + this.background.width + "\n" +
                "Height: " + this.background.height);
        };
        return Menu;
    }(Phaser.State));
    ReduxMain.Menu = Menu;
})(ReduxMain || (ReduxMain = {}));
