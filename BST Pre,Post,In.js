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

 //// postorderTraversal (Left-->,Right -->, Root node ) 
  postorder(node = this.root)
  {
    if (node === null) return;
    this.postorder(node.left);
    this.postorder(node.right);
    console.log(node.data);
  }
 /// preorderTraversal (Root -->,Left-->,Right)
 preorder(node = this.root) 
 {
    if (node === null) return;
    console.log(node.data);
    this.preorder(node.left);
    this.preorder(node.right);}

 /// inorderTraversal (Left-->Root-->Right)
  inorder(node = this.root) 
  {
    if (node === null) return;
    this.inorder(node.left);
    console.log(node.data);
    this.inorder(node.right);
  }
}  
// Taking inputs from user //
const bst = new BST();

bst.add(19)
bst.add(3)
bst.add(78);
bst.add(8);
bst.add(20);
bst.add(22);
bst.add(27);
bst.add(58);
bst.add(9);

console.log("BST elements:");
bst.print();

/// Print Stament of Pre,Post,InorderTraversal ///
console.log("Inorder:");
bst.inorder();

console.log("Preorder:");
bst.preorder();

console.log("Postorder:");
bst.postorder();