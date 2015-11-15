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
let backgroundStars;

function create() {
	backgroundStars = game.add.group();
	backgroundStars.enableBody = true;
	backgroundStars.physicsBodyType = Phaser.Physics.ARCADE;

	ship = game.add.graphics(20, height / 2 - shipHeight / 2);
	ship.beginFill(0xFFFFFF, 0xFF);
	ship.drawRect(0, 0, shipWidth, shipHeight);
}

function update() {
	// remove off-screen stars
	for (let star of backgroundStars.children) {
		if (star.body.x < game.camera.x) {
			star.destroy();
		}
	}

	if (game.rnd.integerInRange(1, 20) === 1) {
		// add a star
		let star = backgroundStars.create(width, game.rnd.integerInRange(0, height), '');

		const isClose = game.rnd.integerInRange(1, 5) <= 2;

		star.body.velocity.x = isClose ? -200 : -120;

		let starGraphics = new Phaser.Graphics(game, 0, 0);
		star.addChild(starGraphics);

		starGraphics.beginFill(0xFFFFFF, 0xFF);
		if (isClose)
			starGraphics.drawRect(0, 0, 4, 4);
		else
			starGraphics.drawRect(0, 0, 2, 2);
	}
}
