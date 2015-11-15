import { Phaser } from 'phaser';

const width = 480;
const height = 300;

const shipHeight = 40;
const shipWidth = 120;

const game = new Phaser.Game(width, height, Phaser.CANVAS, '', {
	create,
	update
});

let ship;

function create() {
	ship = game.add.graphics(20, height / 2 - shipHeight / 2);
	ship.beginFill(0xFFFFFF, 0xFF);
	ship.drawRect(0, 0, shipWidth, shipHeight);
}

function update() {

}
