//Heapify MIN
function heapify(arr, n, i) {
    let Smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] < arr[Smallest]) {
        Smallest = left;
    }

    if (right < n && arr[right] < arr[Smallest]) {
        Smallest = right;
    }

    if (Smallest !== i) {
        // swap
        [arr[i], arr[Smallest]] = [arr[Smallest], arr[i]];
         
        // heapifying the effected
        heapify(arr, n, Smallest);
    }
}

function buildMinheap(arr) {
    let n = arr.length;

    // start from last non-leaf node
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    return arr;
}

let arr = [4,8,3,7,9,2,10,22,25,27,28,5,6,1];
console.log(buildMinheap(arr));

