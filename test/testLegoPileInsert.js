var assert = require('assert');
var lego = require('../legos');

const Brick = lego.Brick;
const LegoPile = lego.LegoPile

describe('testLegoPileInsert', function() {
	describe('insert one brick', function() {
    		it('assert that the brick inserted is inserted into the root node of the BST associated with "red"', function() {
		var brick0 = new Brick(50, "red"); 
		var pile = new LegoPile();
		pile.insert(brick0);
      		assert.equal(pile.datastore["red"].root.data, brick0);
    		});

    		it('assert that the brick inserted is inserted into the root node of the BST associated with "white"', function() {
		var brick0 = new Brick(60, "white"); 
		var pile = new LegoPile();
		pile.insert(brick0);
      		assert.equal(pile.datastore["white"].root.data, brick0);
    		});
    });

    it('assert that the brick inserted is inserted into the root node of the BST associated with "white"', function() {
	var brick0 = new Brick(60, "white"); 
	var pile = new LegoPile();
	pile.insert(brick0);
      assert.equal(pile.datastore["white"].root.data, brick0);
    });
});
