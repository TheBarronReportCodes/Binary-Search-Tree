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
});
