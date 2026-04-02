// Insertion of elements in the red black trees 
// All the cases are included of the rotation and balancing

//Node class represents the node in the Red Black Tree 
//  if w'll be assigning the  one of the storage in the node creation
// if key is used it help others to know that it's used for ordering the 
// node as well as the storing of the data which is been inserted 


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.colour = 'R';
        this.parent = null;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
        this.ll = false;
        this.rr = false;
        this.lr = false;
        this.rl = false;
    }

    rotateLeft(node) {
        const x = node.right;
        const y = x.left;

        x.left = node;
        node.right = y;

        if (y !== null) y.parent = node;

        x.parent = node.parent;
        node.parent = x;

        return x;
    }

    rotateRight(node) {
        const x = node.left;
        const y = x.right;

        x.right = node;
        node.left = y;

        if (y !== null) y.parent = node;

        x.parent = node.parent;
        node.parent = x;

        return x;
    }

    insertHelp(root, data) {
        let f = false;

        if (root === null)
            return new Node(data);

        if (data < root.data) {
            root.left = this.insertHelp(root.left, data);
            root.left.parent = root;

            if (root !== this.root &&
                root.colour === 'R' &&
                root.left.colour === 'R') {
                f = true;
            }
        } else {
            root.right = this.insertHelp(root.right, data);
            root.right.parent = root;

            if (root !== this.root &&
                root.colour === 'R' &&
                root.right.colour === 'R') {
                f = true;
            }
        }

        // Rotations
        if (this.ll) {
            root = this.rotateLeft(root);
            root.colour = 'B';
            root.left.colour = 'R';
            this.ll = false;
        }
        else if (this.rr) {
            root = this.rotateRight(root);
            root.colour = 'B';
            root.right.colour = 'R';
            this.rr = false;
        }
        else if (this.rl) {
            root.right = this.rotateRight(root.right);
            root.right.parent = root;
            root = this.rotateLeft(root);
            root.colour = 'B';
            root.left.colour = 'R';
            this.rl = false;
        }
        else if (this.lr) {
            root.left = this.rotateLeft(root.left);
            root.left.parent = root;
            root = this.rotateRight(root);
            root.colour = 'B';
            root.right.colour = 'R';
            this.lr = false;
        }

        // Fix RED-RED conflict
        if (f) {
            if (root.parent && root.parent.right === root) {
                if (!root.parent.left || root.parent.left.colour === 'B') {
                    if (root.left && root.left.colour === 'R')
                        this.rl = true;
                    else if (root.right && root.right.colour === 'R')
                        this.ll = true;
                } else {
                    root.parent.left.colour = 'B';
                    root.colour = 'B';
                    if (root.parent !== this.root)
                        root.parent.colour = 'R';
                }
            } else if (root.parent) {
                if (!root.parent.right || root.parent.right.colour === 'B') {
                    if (root.left && root.left.colour === 'R')
                        this.rr = true;
                    else if (root.right && root.right.colour === 'R')
                        this.lr = true;
                } else {
                    root.parent.right.colour = 'B';
                    root.colour = 'B';
                    if (root.parent !== this.root)
                        root.parent.colour = 'R';
                }
            }
            f = false;
        }

        return root;
    }

    insert(data) {
        if (this.root === null) {
            this.root = new Node(data);
            this.root.colour = 'B';
        } else {
            this.root = this.insertHelp(this.root, data);
            this.root.parent = null; // ensure root parent is null
        }
    }

    inorderTraversalHelper(node) {
        if (node !== null) {
            this.inorderTraversalHelper(node.left);
            console.log(node.data);
            this.inorderTraversalHelper(node.right);
        }
    }

    inorderTraversal() {
        this.inorderTraversalHelper(this.root);
    }

    printTreeHelper(root, space) {
        if (root !== null) {
            space += 5;

            this.printTreeHelper(root.right, space);

            console.log(' '.repeat(space) + root.data + "(" + root.colour + ")");

            this.printTreeHelper(root.left, space);
        }
    }

    printTree() {
        this.printTreeHelper(this.root, 0);
    }
}

// Test
const t = new RedBlackTree();
const arr = [1, 4, 6, 3, 5, 7, 8, 2, 9];

arr.forEach(x => t.insert(x));

console.log("Inorder:");
t.inorderTraversal();

console.log("\nTree:");
t.printTree();