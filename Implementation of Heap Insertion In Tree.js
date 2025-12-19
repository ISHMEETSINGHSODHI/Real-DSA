//Implemetation Of  Insertion in Tree Format

function freshnode(value) {
    return {
        value,
        left: null,
        right: null,
        parent: null
    };
}

function heapifyUp(node) {
    while (node.parent && node.value < node.parent.value) {
        [node.value, node.parent.value] =
        [node.parent.value, node.value];
        node = node.parent;
    }
}

function insert(root, value) {
    const newnode = freshnode(value);

    if (!root) return newnode;

    const queue = [root];

    while (queue.length) {
        const current = queue.shift();

        if (!current.left) {
            current.left = newnode;
            newnode.parent = current;
            heapifyUp(newnode);
            break;
        } else {
            queue.push(current.left);
        }

        if (!current.right) {
            current.right = newnode;
            newnode.parent = current;
            heapifyUp(newnode);
            break;
        } else {
            queue.push(current.right);
        }
    }
    return root;
}

  
// Test
let root = null;

root = insert(root, 10);
root = insert(root, 5);
root = insert(root, 14);
root = insert(root, 2);

console.log(root.value); // 2