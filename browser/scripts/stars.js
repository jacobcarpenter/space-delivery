import { width, height } from './main';

export function cleanUpStars(game, backgroundStars) {
	for (let star of backgroundStars.children) {
		if (star.body.x < game.camera.x) {
			star.destroy();
		}
	}
}

export function createStars(game, backgroundStars) {
	if (game.rnd.integerInRange(1, 15) === 1) {
		let star = backgroundStars.create(width, game.rnd.integerInRange(0, height), '');

		const isClose = game.rnd.integerInRange(1, 7) <= 2;

		star.body.velocity.x = isClose ? -200 : -120;

		let starGraphics = game.add.graphics();
		star.addChild(starGraphics);

		starGraphics.beginFill(0xFFFFFF, 0xFF);
		if (isClose)
			starGraphics.drawRect(0, 0, 4, 4);
		else
			starGraphics.drawRect(0, 0, 2, 2);
	}
}