/// <reference path="../../refs.d.ts" />

module ReduxMain {
    export class Menu extends Phaser.State {
        game: Phaser.Game;
        background: Phaser.TileSprite;
        debugText: Phaser.Text;
        title: Phaser.Text;
        entity: Phaser.Sprite;
        map = [
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
        // length of the map = 50 blocks, width of the map = 9
        tileMap = {};

        constructor() {
            super();
        }

        create() {
            this.game.world.setBounds(0, 0, 6400, 896);
            this.background = this.game.add.tileSprite(0, -window.innerHeight / 10, this.game.width * 5, this.game.height * 2, 'colored_desert');
            this.title = this.game.add.text(this.game.width / 2 + this.game.width * 3, this.game.height/2, 'Redux', { font: "32px Arial" });
            this.createMap();
            this.entity = this.game.add.sprite(this.game.width / 2, this.game.height / 2, '');
            //this.game.camera.follow(this.entity);
            this.game.camera.x += this.game.width * 3;
            var worm = this.game.add.sprite(this.game.width * 3, 0, 'sprite_complete');
            worm.animations.add('move', Phaser.Animation.generateFrameNames('torch', 1, 2, '.png', 1), 4, true);
            worm.animations.play('move');
            //Debug:
            //this.debugText = this.game.add.text(0, 0, this.createDebugString(), {font: "32px Arial", fill: '#32cde0', wordWrap: true, wordWrapWidth: this.game.width, align: 'center'});

        }

        createMap() {
            for (let i = 0; i < this.map.length; i++) {
                for (let j = 0; j < this.map[i].length; j++) {
                    if (this.map[i][j] == '-' || this.map[i][j] == '+') {
                        this.createTileOnMap(0 + 128 * j, -128 + 128 * i, 'sprite_complete', 'grassCenter.png', true);
                    } else if (this.map[i][j] == '=') {
                        this.createTileOnMap(0 + 128 * j, -128 + 128 * i, 'sprite_complete', 'grassMid.png', true);
                    } else if (this.map[i][j] == ']') {
                        this.createTileOnMap(0 + 128 * j, -128 + 128 * i, 'sprite_complete', 'grassRight.png', true);
                    } else if (this.map[i][j] == '[') {
                        this.createTileOnMap(0 + 128 * j, -128 + 128 * i, 'sprite_complete', 'grassLeft.png', true);
                    } else if (this.map[i][j] == '/') {
                        this.createTileOnMap(0 + 128 * j, -128 + 128 * i, 'sprite_complete', 'grassCorner_right.png', true);
                    } else if (this.map[i][j] == '\\') {
                        this.createTileOnMap(0 + 128 * j, -128 + 128 * i, 'sprite_complete', 'grassCorner_left.png', true);
                    } else if (this.map[i][j] == '(') {
                        this.createTileOnMap(0 + 128 * j, -128 + 128 * i, 'sprite_complete', 'grassHill_left.png', true);
                    } else if (this.map[i][j] == ')') {
                        this.createTileOnMap(0 + 128 * j, -128 + 128 * i, 'sprite_complete', 'grassHill_right.png', true);
                    } else if (this.map[i][j] == '_') {
                        this.createTileOnMap(0 + 128 * j, -128 + 128 * i, 'sprite_complete', 'grass.png', true);
                    }
                }
            }
        }

        createTileOnMap(x, y, spriteSheet, spriteFrame, immovable) {
            var tile = this.game.add.sprite(x, y, spriteSheet);
            tile.frameName = spriteFrame;
            tile.body.immovable = immovable;
            if (this.tileMap[spriteSheet] == null) {
                this.tileMap[spriteSheet] = {};
            } else if (this.tileMap[spriteSheet][spriteFrame] == null) {
                this.tileMap[spriteSheet][spriteFrame] = {};
            } else if (this.tileMap[spriteSheet][spriteFrame][x] == null) {
                this.tileMap[spriteSheet][spriteFrame][x] = {};
            } else {
                this.tileMap[spriteSheet][spriteFrame][x][y] = tile;
            }
        }

        beautifyText(text) {

        }

        update() {
            // for (let spriteSheet in this.tileMap) {
            //     for (let sprite in this.tileMap[spriteSheet]) {
            //         for (let x in this.tileMap[spriteSheet][sprite]) {
            //             for (let y in this.tileMap[spriteSheet][sprite][x]) {
            //                 console.log(this.tileMap[spriteSheet][sprite][x][y]);
            //                 this.tileMap[spriteSheet][sprite][x][y].x -= 1;
            //             }
            //         }
            //     }
            // }
            // this.entity.x += 0;
            // this.title.x += 0;
            // this.game.world.wrap(this.entity, -(this.game.width / 2), false, true, false);
            // this.game.world.wrap(this.title, -(this.game.width / 2), false, true, false);
            this.background.tilePosition.x -= 2;

            //Debug:
            //this.debugText.setText(this.createDebugString());
        }

        createDebugString() {
            return (
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
