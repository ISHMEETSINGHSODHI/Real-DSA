function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        // swap
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function buildMaxheap(arr) {
    let n = arr.length;

    // start from last non-leaf node
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    return arr;
}

// Input
{let arr = [4, 8, 3, 7, 9, 2, 1, 10, 22, 25, 27, 28, 5, 6, 1];
console.log(buildMaxheap(arr));
}

