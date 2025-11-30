// Node class
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// BST class
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
          // duplicate values ignored
          return null;
        }
      };
      return searchTree(node);
    }
  }

  height(node = this.root) {
    if (node === null) return 0;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  print(node = this.root) {
    if (node === null) return;
    this.print(node.left);
    console.log(node.data);
    this.print(node.right);
  }
}

// Taking inputs from user
const bst = new BST();

bst.add(19);
bst.add(3);
bst.add(78);
bst.add(8);
bst.add(20);
bst.add(22);
bst.add(27);
bst.add(58);
bst.add(9);

console.log("BST elements (Inorder Traversal):");
bst.print();

console.log("Height of BST =", bst.height());
