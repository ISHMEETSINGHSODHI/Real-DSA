// Take numbers one-by-one from the user and insert them into the tree BST //

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// Method to insert a new value into Binary Search tree //
class BinarySearchTree {
constructor(){
    this.root = null;
}
 isEmpty () {
    return this.root === null;
 }
 insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
        this.root = newNode
    } else {
        this.insertNode(this.root,neweNode)
    }
 } 

 insertNode(root,newNode) {
    if(newNode.value< root.value){
        if(root.left === null) {
           root.left = newNode
        } else {
            this.insertNode(root.left,newNode) 
        } 
        }  else {
            if(root.right === null) {
                root.right = newNode
            } else {
                this.insertNode (root.right,newNode)
            }
        }
    }
 }
const bst = new BinarySearchTree();
console.log('Tree is empty ?' , bst.isEmpty()); // true
 
bst.insert(10);
bst.insert(26)
bst.insert(580)