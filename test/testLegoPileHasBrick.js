var assert = require('assert');
var lego = require('../legos');

const Brick = lego.Brick;
const LegoPile = lego.LegoPile

describe('testLegoPileHasBrick', function() {
	describe('find one brick', function() {
		it('assert that the one inserted brick is found', function() {
			var brick0 = new Brick(60, "green");
			var pile = new LegoPile();
			pile.insert(brick0);
			assert.equal(pile.hasBrick(60, "green"), true);
		});
	});

	describe('find two bricks in different trees', function() {
		it('assert that the second brick inserted into each of the specified BST is found', function() {
			var brick0 = new Brick(60, "green");
			var brick1 = new Brick(65, "green");
			var brick2 = new Brick(80, "black");
			var brick3 = new Brick(75, "black");
			var pile = new LegoPile();
			pile.insert(brick0);
			pile.insert(brick1);
			pile.insert(brick2);
			pile.insert(brick3);
			assert.equal(pile.hasBrick(65, "green"), true);
			assert.equal(pile.hasBrick(75, "green"), true);
		});
	});
});
