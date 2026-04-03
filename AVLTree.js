// Writing the code for the insertion of the elements in the  AVL tree which includes active re balancing 

class Node {
    constructor(key) {
        this.key = key ;
        this.left = null ;
        this.right = null;
        this.height = 1 ;

    }
}
// A utility functio to get 
// the height of the tree 
function height(node) {
    if (node === null) {
        return 0;
        
    }
    return node.height ;
}


// A utility function for the right rotate 
// subtree rooted with y 
function rightRotate(y) {
    const x = y.left;
    const T2 = x.right;
    // Performing the rotation 

    x.right = y ;
    y.left =  T2; 
    // Update heights
    x.height = 1 + Math.max(height(x.left), height(x.right)); 
    y.height = 1 + Math.max(height(y.left), height(y.right));

    // return the root 
    return x;

}

// A utility function  to left rotate subtree rooted with x 
function leftRotate(x){
    const y = x.right;
    const T2 = y.left;
    
    // Perfon rotation 
    y.left = x;
    x.right = T2;

    // Updating the height / balance factor updating 
    x.height = 1 + Math.max(height(x.left), height(x.right));
    y.height = 1 + Math.max(height(y.left),(height(y.right)));
    
    // Return the new node
    return y;

}

function getBalance(node)  {
    if (node === null) {
        return 0;

    }
    return height(node.left) - height(node.right);

}
// Recursive function to insert a key in
// the subtree rooted with node


function insert(node, key) {
     if (node === null) {
        return new Node(key);

    }

    if ( key < node.key) {
        node.left = insert(node.left , key );
    } else if (key > node.key){
        node.right = insert(node.right, key);
    }else {
        return node; 
    } 

    node.height = 1 + Math.max(height(node.left), height(node.right));



    const balance = getBalance(node);

    if (balance > 1 && key > node.left.key){
        return rightRotate(node);
    }

    if(balance < -1 && key > node.right.key){
        return leftRotate(node);
        
    }
   
    if (balance > 1 && key > node.left.key) {
        node.left = leftRotate(node.left);
        return rightRotate(node);
    }

    if (balance < -1 && key < node.right.key) {
        node.right = rightRotate(node.right);
        return leftRotate(node);
    }
   
    return node;

}

function preOrder(root) {
    if (root !== null) {
        console.log(root.key + " ");
        preOrder(root.left);
        preOrder(root.right);
    }
}

// Driver code
let root = null;

root = insert(root, 10);
root = insert(root, 20);
root = insert(root, 30);
root = insert(root, 40);
root = insert(root, 50);
root = insert(root, 25);

preOrder(root);
