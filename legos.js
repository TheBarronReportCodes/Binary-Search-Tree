module.exports.Brick = Brick;
module.exports.LegoPile = LegoPile;

var bst = require('./bst');
const BST = bst.BST;

/* Creates a brick object of a specific size and color
*/
function Brick(size, color) {
this.size = size;
this.color = color;
}

/* Creates a LegoPile where the pile contains multiple search trees assigned to different colors
*/
function LegoPile() {
this.datastore = {
	"red" : new BST(),
	"green" : new BST(),
	"blue" : new BST(),
	"yellow" : new BST(),
	"black" : new BST(),
	"white" : new BST()
};
this.insert = insert;
this.hasBrick = hasBrick;
this.findBinaryTree = findBinaryTree;
this.findBrick = findBrick;
}

/* inserts a brick object into the appropriate colors BST
*/
function insert(Brick) {
	for (var key in this.datastore) {
		if (Brick.color == key) {
		this.datastore[key].insert(Brick);
		}
	}
}

/* checks whether the legoPile has a brick with the given size and color
*/
function hasBrick(size, color) {
var binarySearchTree = this.findBinaryTree(color);
findBrick(size, binarySearchTree);
return findBrick(size, binarySearchTree) != null;
}

/* returns the binary search tree associated with the color(key)
*/
function findBinaryTree(key) {
return this.datastore[key];
}

/* searches a binary tree for a specific size. if size is found the object is returned, if not, null is returned
*/
function findBrick(size, searchTree) {
	if (searchTree.root == null) {
	return null;
	} else {
		var current = searchTree.root;
		var parent;
		while (true) {
			parent = current;
			if (size < current.data.size) {
				current = current.left;
				if (current == null) {
					break;
				}
			} else if (size > current.data.size) {
				current = current.right;
				if (current == null) {
					break;
				}
			} else if (size == current.data.size) {
				return current.data;
			}
		}
	}
}

/* returns the total number of Brick objects in the LegoPile
*/
function count() {

}

/* helper function that counts the nodes in a tree recursively
*/
function countSubtree(root) {

}








