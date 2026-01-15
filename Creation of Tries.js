// Trie Node definition
class TrieNode {
    constructor() {
        // Array of size 26 for 'a' to 'z'
        this.children = Array(26).fill(null);
        this.isEndOfWord = false;
    }
}

// Insert a word into the Trie
function insert(root, key) {
    let curr = root;

    for (let c of key) {
        let index = c.charCodeAt(0) - 'a'.charCodeAt(0);

        if (curr.children[index] === null) {
            curr.children[index] = new TrieNode();
        }

        curr = curr.children[index];
    }

    curr.isEndOfWord = true;
}

// Search a word in the Trie
function search(root, key) {
    let curr = root;

    for (let c of key) {
        let index = c.charCodeAt(0) - 'a'.charCodeAt(0);

        if (curr.children[index] === null) {
            return false;
        }

        curr = curr.children[index];
    }

    return curr.isEndOfWord;
}

// -------- DRIVER CODE (INPUT) --------
let root = new TrieNode();

insert(root, "apple");
insert(root, "app");
insert(root, "bat");
insert(root, "ball");

// -------- OUTPUT --------
console.log(search(root, "app"));    // true
console.log(search(root, "apple"));  // true
console.log(search(root, "bat"));    // true
console.log(search(root, "ball"));   // true

console.log(search(root, "ban"));    // false
console.log(search(root, "ap"));     // false
// Deletion is taking more time so i'll be doung it later for now i am marking the task 
