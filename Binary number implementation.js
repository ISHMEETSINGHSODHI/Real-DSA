function int_to_binary (num) {
    if(num === 0) return "0";
    
    let binary = "";

    while (num > 0) {
        binary = (num % 2) +binary;
        num = Math.floor(num / 2);
    }
    return binary; 

} 

console.log(int_to_binary(10));
console.log(int_to_binary(3));
console.log(int_to_binary(9));
console.log(int_to_binary(8));
console.log(int_to_binary(100));
console.log(int_to_binary(5));
console.log(int_to_binary(0));
console.log(int_to_binary(9824364));