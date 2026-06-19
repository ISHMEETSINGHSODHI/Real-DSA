// code is written for the searching if the keys within the node not going through the tree 
// please have a note of the above explination thanks 



class Node{
    constructor(t,leafnode= true) {
        this.t = t;
        this.leafnode = leafnode
        this.keys =[];
        this.children =[]; 
}

}
function search node,key){
// linear search : for linearly searhing of the key inside of the node  NOTE : Basically for the note books and easy understanding
let i = 0;
while(i < this node.keys.length && key > this node.keys[i] ) 
    i++;
if (i < this node.keys.length && key === this node.keys[i])
    return FOUND;

// bineary search  : for the searching of the key in the binary  search manner as the no of keys in the node is more like above 10 as it really makes the difference when we are searching in node that has keys equal to 1,000,000 or even 100,000 or 1000 .
let low = 0 ;
let high = this node.keys.length -1 ;

while(low <= high){
    let mid = Math.floor((high+low) / 2);

        
    if (key === this node.keys[mid]){
        return"FOUND"
    }else if (key< this node.keys[mid]){
        high = mid -1;
    }else {
        low = mid +1 
    }

}

if (this node.lea node){
    return false;
}

// low indicate the child to follow  if the node does not contains the key but from that node we can find the children that may cotains the key in the children node 
return search node.children[low],key);
}