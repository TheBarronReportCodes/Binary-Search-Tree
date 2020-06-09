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
return find(color)
}
