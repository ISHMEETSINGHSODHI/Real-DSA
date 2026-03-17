const quickSort = (arr) => {
    if(arr.length <= 1) {
        return arr ;
    }

let pivot = arr[0];
let left =[];
let right = [];

for(let i = 1 ; i < arr.length; i++){
    if(arr[i]< pivot ){
        left.push(arr[i]);

    } else {
        right.push(arr[i]);
    }    
} 
return [...quickSort(left), pivot ,...quickSort(right)];
};    

let arr = [89, 78, 345, 656, 654, 1, 65, 256, 24];

console.log("Given array:", arr);
console.log("Sorted Array:", quickSort(arr));