// Insertion of the elements in the B tree structure  
// which is to construct the B trees and Adhere it's properties 
// of the B trees  All the Collision cases of the B trees construction 
//ALways write  the test cases of the Coded function as you won't Have Jest in your interview 
// Be Patient 
import test from 'node : test ';
 

/* Function to  test 
 function BtreesNodes (t, leaf ) {
    this.t = t; //Minimum Degree
    this.leaf = leaf;
    // Array for Heys and children 
    this.keyss = Array(2 * t - 1 ).fill(null); 
}*/
class BtressNodes{
    constructor(t,leaf){
        // config t is been selected by the the engine internally decides it 
        // , leaf to lfag where to start insertion on what level 
        this.t = t;
        this.leaf = leaf;
      // structure 

        this.keyss = Array(2 * t - 1).fill(null);
        this.c = Array(2 * t).fill(null);
        //  curr state 
        this.n = 0;  // current no of keyss that's within limit of the defined keyss array .

    } 

 //  This function is called when the node is Not full that is  (keyss < array( 2 * t - 1 ))  in the node .
  
  insertNonFull(k) {
    let i = this.n -1 ;
    if (this.leaf) {
        while(i >= 0 && this.keyss [i] > k  ){
          this.keys [i+1] = this.keys [i];
          i--;
        
        }
        this.keys [i+1] = k;
        this.n++;
       
      


    }
    else {
      while ( i >=0 && this.keys[i] > k );{
        i--;
      }
      if(this.c[i+1] === 2 * this.t -1 ){
      this.splitChild(i + 1, this.c[i+1]);
      if (this.keys[i + 1] < k) {
        i++;
      }
    }
    this.c[i+1].insertNonFull(k);

    }
    
  }

  splitChild(i , y) {
    const z =new BtressNodes(y)
  }
 

































}  
