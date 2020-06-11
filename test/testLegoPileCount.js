var assert = require('assert');
var lego = require('../legos');

const Brick = lego.Brick;
const LegoPile = lego.LegoPile

describe('testLegoPileCount', function() {
	describe('find one brick', function() {
		it('assert that the one inserted brick is found in the pile', function() {
			var brick0 = new Brick(60, "green");
			var pile = new LegoPile();
			pile.insert(brick0);
			assert.equal(pile.legoPileCount(), 1);
		});
	});

	describe('find four bricks', function() {
		it('assert that the four inserted bricks are found in the pile', function() {
			var brick0 = new Brick(60, "blue");
			var brick1 = new Brick(75, "green");
			var brick2 = new Brick(80, "green");
			var brick3 = new Brick(33, "red");
			var pile = new LegoPile();
			pile.insert(brick0);
			pile.insert(brick1);
			pile.insert(brick2);
			pile.insert(brick3);
			assert.equal(pile.legoPileCount(), 4);
		});
	});

	describe('find multiple bricks within multple BSTs', function() {
		it('assert that the 10 inserted bricks are found in the pile', function() {
			var brick0 = new Brick(60, "white");
			var brick1 = new Brick(75, "green");
			var brick2 = new Brick(80, "green");
			var brick3 = new Brick(33, "green");
			var brick4 = new Brick(6, "green");
			var brick5 = new Brick(75, "green");
			var brick6 = new Brick(80, "yellow");
			var brick7 = new Brick(33, "red");
			var brick8 = new Brick(60, "blue");
			var brick9 = new Brick(75, "black");
			var pile = new LegoPile();
			pile.insert(brick0);
			pile.insert(brick1);
			pile.insert(brick2);
			pile.insert(brick3);
			pile.insert(brick4);
			pile.insert(brick5);
			pile.insert(brick6);
			pile.insert(brick7);
			pile.insert(brick8);
			pile.insert(brick9);
			assert.equal(pile.legoPileCount(), 10);
		});
	});
});
