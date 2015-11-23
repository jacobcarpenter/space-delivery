import { width, height } from './main';

export function cleanUpMeteors(game, meteors) {
	for (let meteor of meteors.children) {
		if (meteor.body.x < game.camera.x) {
			meteor.destroy();
		}
	}
}

export function createMeteors(game, meteors) {
	if (game.rnd.integerInRange(1, 45) === 1) {
		let meteor = meteors.create(width, game.rnd.integerInRange(0, height), '');

		meteor.body.angularVelocity = game.rnd.integerInRange(-40, 40);
		meteor.body.velocity.x = game.rnd.integerInRange(-300, -100);
		meteor.body.velocity.y = game.rnd.integerInRange(-20, 20);

		let meteorGraphics = game.add.graphics();
		meteor.addChild(meteorGraphics);

		meteorGraphics.beginFill(0xFFFFFF, 0xFF);
		meteorGraphics.drawRect(0, 0, 12, 12);
	}
}