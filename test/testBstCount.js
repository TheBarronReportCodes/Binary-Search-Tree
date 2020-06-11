var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;

describe('testBSTcount', function() {
	describe('count one brick', function() {
    		it('assert that the count of nodes for a bst with one brick returns 1', function() {
		var brick0 = new Brick(50, "red");
		var tree = new BST();
		tree.insert(brick0);
		assert.equal(tree.count(tree), 1);
	});
    });
});
