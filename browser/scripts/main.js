import { Phaser } from 'phaser';
import { createMeteors, cleanUpMeteors } from './meteors';
import { createStars, cleanUpStars } from './stars';

export const width = 480;
export const height = 300;

const shipHeight = 40;
const shipWidth = 120;

const shipInputVelocity = 300;

const game = new Phaser.Game(width, height, Phaser.CANVAS, '', {
	create,
	update
});

let ship;
let backgroundStars;
let meteors;
let cursors;

function create() {
	cursors = game.input.keyboard.createCursorKeys();

	backgroundStars = game.add.group();
	backgroundStars.enableBody = true;
	backgroundStars.physicsBodyType = Phaser.Physics.ARCADE;

	ship = game.add.sprite(20, height / 2 - shipHeight / 2);
	game.physics.enable(ship);

	let shipGraphics = game.add.graphics();
	ship.addChild(shipGraphics);

	shipGraphics.beginFill(0xFFFFFF, 0xFF);
	shipGraphics.drawRect(0, 0, shipWidth, shipHeight);

	shipGraphics.beginFill(0x999900, 0xFF);
	shipGraphics.drawPolygon(new Phaser.Polygon({ x: shipWidth, y: 0 }, { x: shipWidth + 50, y: shipHeight / 2 }, { x: shipWidth, y: shipHeight }));

	meteors = game.add.group();
	meteors.enableBody = true;
	meteors.physicsBodyType = Phaser.Physics.ARCADE;
}

function update() {
	ship.body.velocity.y = 0;
	if (cursors.up.isDown) {
		ship.body.velocity.y -= shipInputVelocity;
	}
	if (cursors.down.isDown) {
		ship.body.velocity.y += shipInputVelocity;
	}

	cleanUpStars(game, backgroundStars);
	cleanUpMeteors(game, meteors);

	createStars(game, backgroundStars);
	createMeteors(game, meteors);
}
