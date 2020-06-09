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

	describe('insert one brick of each color', function() {
    		it('assert that all six bricks inserted are inserted into the root node of the BST associated with their respective color', function() {
		var brick0 = new Brick(50, "white"); 
		var brick1 = new Brick(50, "green"); 
		var brick2 = new Brick(50, "yellow"); 
		var brick3 = new Brick(50, "black"); 
		var brick4 = new Brick(50, "red"); 
		var brick5 = new Brick(50, "blue"); 
		var pile = new LegoPile();

		pile.insert(brick0);
		pile.insert(brick1);
		pile.insert(brick2);
		pile.insert(brick3);
		pile.insert(brick4);
		pile.insert(brick5);

      		assert.equal(pile.datastore["white"].root.data, brick0);
		assert.equal(pile.datastore["green"].root.data, brick1);
		assert.equal(pile.datastore["yellow"].root.data, brick2);
		assert.equal(pile.datastore["black"].root.data, brick3);
		assert.equal(pile.datastore["red"].root.data, brick4);
		assert.equal(pile.datastore["blue"].root.data, brick5);
    		});
	});

	describe('insert several bricks of one color', function() {
    		it('assert that all six bricks insert all fall within the yellow BST only', function() {
		var brick0 = new Brick(76, "yellow"); 
		var brick1 = new Brick(159, "yellow"); 
		var brick2 = new Brick(160, "yellow"); 
		var brick3 = new Brick(48, "yellow"); 
		var brick4 = new Brick(33, "yellow"); 
		var brick5 = new Brick(82, "yellow"); 
		var pile = new LegoPile();

		pile.insert(brick0);
		pile.insert(brick1);
		pile.insert(brick2);
		pile.insert(brick3);
		pile.insert(brick4);
		pile.insert(brick5);

		assert.equal(pile.datastore["yellow"].root.data, brick0);
		assert.equal(pile.datastore["yellow"].root.right.data, brick1);
		assert.equal(pile.datastore["yellow"].root.right.right.data, brick2);
		assert.equal(pile.datastore["yellow"].root.left.data, brick3);
		assert.equal(pile.datastore["yellow"].root.left.left.data, brick4);
		assert.equal(pile.datastore["yellow"].root.right.left.data, brick5);
    		});
	});
});
