var assert = require('assert');
var lego = require('../legos');

const Brick = lego.Brick;
const LegoPile = lego.LegoPile

describe('testLegoPileInsert', function() {
    it('assert that the brick inserted is inserted into the root node of the BST associated with "red"', function() {
	var brick0 = new Brick(50, "red"); 
	var pile = new LegoPile();
	pile.insert(brick0);
	console.log(pile.dict);
      assert.equal(pile.dict["red"].root.data, brick0);
    });
});
