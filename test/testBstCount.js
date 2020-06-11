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
		assert.equal(tree.count(), 1);
		});
	});

	describe('count two bricks', function() {
    		it('assert that the count of nodes for a bst with two bricks returns 2', function() {
		var brick0 = new Brick(50, "red");
		var brick1 = new Brick(65, "red");
		var tree = new BST();
		tree.insert(brick0);
		tree.insert(brick1);
		assert.equal(tree.count(), 2);
		});
    	});

	describe('count multiple bricks', function() {
    		it('assert that the count of nodes for a bst with six bricks returns 6', function() {
		var brick0 = new Brick(50, "red");
		var brick1 = new Brick(65, "red");
		var brick2 = new Brick(33, "red");
		var brick3 = new Brick(96, "red");
		var brick4 = new Brick(11, "red");
		var brick5 = new Brick(45, "red");
		var tree = new BST();
		tree.insert(brick0);
		tree.insert(brick1);
		tree.insert(brick2);
		tree.insert(brick3);
		tree.insert(brick4);
		tree.insert(brick5);
		assert.equal(tree.count(), 6);
		});
    	});
});
