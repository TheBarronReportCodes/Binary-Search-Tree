var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;

describe('testBST', function() {
    it('assert that brick0 is inserted into the root node', function() {
	var brick0 = new Brick(1,"test");
	var tree0 = new BST();
	tree0.insert(brick0);
      assert.equal(tree0.root.data, brick0);
    });

    it('assert that brick0(root node) left is null', function() {
	var brick0 = new Brick(1,"test");
	var tree0 = new BST();
	tree0.insert(brick0);
      assert.equal(tree0.root.left, null);
    });

    it('assert that brick0(root node) right is null', function() {
	var brick0 = new Brick(1,"test");
	var tree0 = new BST();
	tree0.insert(brick0);
      assert.equal(tree0.root.right, null);
    });

    it('assert that two bricks(sizes 102 and 65) inserted into BST end with brick object of size 65 as the root nodes left child', function() {
	var brick0 = new Brick(102,"red");
	var brick1 = new Brick(65,"red");
	var tree0 = new BST();
	tree0.insert(brick0);
	tree0.insert(brick1);
      assert.equal(tree0.root.left.data, brick1);
    });

    it('assert that two bricks(sizes 65 and) inserted into BST end with brick object of size 102 as the root nodes right child', function() {
	var brick0 = new Brick(65,"red");
	var brick1 = new Brick(102,"red");
	var tree0 = new BST();
	tree0.insert(brick0);
	tree0.insert(brick1);
      assert.equal(tree0.root.right.data, brick1);
    });
});
