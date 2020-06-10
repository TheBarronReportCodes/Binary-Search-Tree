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
});
