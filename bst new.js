//// Take numbers one-by-one from the user and insert them into the tree BST //

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else {
            return searchTree(node.right);
          }
        } else {
          // data is equal to node.data; do nothing or handle duplicates here
          return null;
        }
      };
      return searchTree(node);
    }
  }


print(node = this.root) {
    if (node === null) return;
    this.print(node.left);
    console.log(node.data);
    this.print(node.right);
  }
}  
// giving user inputs 
const bst = new BST();

bst.add(4);
bst.add(3)
bst.add(7);
bst.add(8);
bst.add(20);
bst.add(22);
bst.add(27);
bst.add(3);
bst.add(98);

console.log("BST elements:");
bst.print();