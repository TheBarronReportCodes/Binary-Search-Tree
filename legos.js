module.exports.Brick = Brick;
module.exports.LegoPile = LegoPile;

var bst = require('../bst');
const BST = bst.BST;

/* Creates a brick object of a specific size and color
*/
function Brick(size, color) {
this.size = size;
this.color = color;
}

/* Creates a LegoPile where the pile contains bricks of different colors
*/
function LegoPile() {
this.add = add;
this.datastore = new Array();
this.find = find;
this.remove = remove;
this.showAll = showAll;
this.insert = insert;
}

/* adds a specified value to the key. The key serves as a location inside of the datastore array. 
*/
function add(key, value) {
this.datastore[key] = value;
}

/* finds and returns the value at the specified key
*/
function find(key) {
return this.datastore[key];
}

/* delete the value at the specified key
*/
function remove(key) {
delete this.datastore[key];
}

/* show all the keys and their value
*/
function showAll() {
	for (var key in this.datastore) {
	print(key + "->" + this.datastore[key]);
	}
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
