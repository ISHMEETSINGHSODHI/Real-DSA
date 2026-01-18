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
    // search \ to find weathert the word ispresent in the tries
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

// Find the word Present In an Given Paragraph 
function findWord (paragraph ,trie) {
    const found =new Set();
    const text = paragraph.toLowerCase();


    for (i = 0 ; i<text.length; i++) {
        let node = trie.root;
        let j = i;
        

        while(j < text.length && node.children [text[j]]) {
            node =node.children[text[j]];


            if (node.endOfWord){
                found.add(text.substring(i,j+1));
            }
            j++;
        }
    }
    return Array.from(found);
}
const trie = new Tries();


const paragraph = "The cat and dog are playing in the yard of an artist.";

paragraph.split(" ").forEach(word => trie.insert(word.toLowerCase()));

console.log(trie.contains("cat"));      // true
console.log(trie.contains("dog"));      // true
console.log(trie.contains("dadg"));     // false
console.log(trie.startsWithPrefix("an")); // true

console.log(findWord(paragraph, trie));
console.log(trie.contains("are"))
/* in th following code the time complexity of the following code is as follows
Time and Space Complexity of Tries
The time complexity of operations in a trie data structure is as follows:
Insertion: O(L), where L is the length of the string.
Deletion: O(L), where L is the length of the string.
Search: O(L), where L is the length of the string.
Prefix Matching: O(M), where M is the length of the prefix.
The space complexity for creating a trie is O(alphabet_size
 * average_key_length * N), where N is the average length 
of the keys in the trie. Tries are space-efficient due to 
sharing common prefixes, which reduces the number of nodes
 needed to represent the entire set of strings.
 Need to hage an look into the time complexity */
 