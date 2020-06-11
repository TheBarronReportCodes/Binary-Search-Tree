module.exports.Node = Node;
module.exports.BST = BST;

/* Creates a Node for the BST
*/
function Node(data, left, right) {
this.data = data;
this.left = left;
this.right = right;
this.show = show;
}

/* Displays the data in a node
*/
function show() {
return this.data;
}

/* Creates an empty binary search tree
*/
function BST() {
this.root = null
this.insert = insert;
}

/* Adds a node into a spot on the binary based on the described algorithm
*/
function insert(data) {
	var n = new Node(data, null, null);
	if (this.root == null) {
		this.root = n;
	} else {
		var current = this.root;
		var parent;
		while (true) {
			parent = current;
			if (data.size < current.data.size) {
				current = current.left;
				if (current == null) {
					parent.left = n;
					break;
				}
			} else {
				current = current.right;
				if (current == null) {
					parent.right = n;
					break;
				}
			}
		}
	} 
}

/* returns the total number of Brick objects in the BST
*/
function count() {
}

/* helper function that counts the nodes in a tree recursively
*/
function countSubtree() {
}


