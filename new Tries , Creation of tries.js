//Node
//Tries:
//Insertion
//contains
//curr means current node 

class Node{
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}


class Tries {
    constructor () {
        this.root = new Node();
    }


    //insetion of word
    insert(word) { 
       let curr = this.root;

       for (let i = 0; i < word.length; i++ ){
          let characterToInsert = word [i];
        
        
            if(!(characterToInsert in curr.children)) {
                curr.children[characterToInsert] = new Node();
            }
        
           curr = curr.children[characterToInsert];
        }

        curr.endOfWord = true;
    }
    // Ssearch 
    contains(word) {
        let curr = this.root;

        for (let i=0; i < word.length; i++) {
            let characterToFind = word[i];

            if(!(characterToFind in curr.children)) {
                return false;
            }

            curr = curr.children[characterToFind];
        }

        return curr.endOfWord;
    }




    startsWithPrefix(prefix) {
       let curr = this.root;


        for(let i = 0; i < prefix.length; i++) {
            let characterWithPrefix = prefix [i];
   
            if(!(characterWithPrefix in curr.children)) {
                return false;
            }

          curr = curr.children[characterWithPrefix];


        }
        
        return true
    }
}

const trie = new Tries();

trie.insert("cat");
trie.insert("car");
trie.insert("dog");

console.log(trie.contains("cat"));
console.log(trie.contains("car"));
console.log(trie.contains("dog"));
console.log(trie.contains("do"));
console.log(trie.contains("cow"));
 

console.log(trie.startsWithPrefix("ca")); // true
console.log(trie.startsWithPrefix("do")); // true
console.log(trie.startsWithPrefix("co")); // false