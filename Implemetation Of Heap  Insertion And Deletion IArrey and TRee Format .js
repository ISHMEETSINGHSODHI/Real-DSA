class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Insert an element
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] < this.heap[index]) {
                [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];
                index = parent;
            } else {
                break;
            }
        }
    }

    // Delete root (maximum element)
    delete() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    heapifyDown(index) {
        const size = this.heap.length;

        while (true) {
            let largest = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            if (left < size && this.heap[left] > this.heap[largest])
                largest = left;

            if (right < size && this.heap[right] > this.heap[largest])
                largest = right;

            if (largest !== index) {
                [this.heap[index], this.heap[largest]] =
                [this.heap[largest], this.heap[index]];
                index = largest;
            } else {
                break;
            }
        }
    }
}


const maxHeap = new MaxHeap();

maxHeap.insert(10);
maxHeap.insert(30);
maxHeap.insert(20);
maxHeap.insert(5);

console.log(maxHeap.heap); // [30, 10, 20, 5]

console.log(maxHeap.delete()); // 30
console.log(maxHeap.heap); // [20, 10, 5]



// Insertion Of Element in Arrey Format as  Min Heap 
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] > this.heap[index]) {
                [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];
                index = parent;
            } else {
                break;
            }
        }
    }

    delete() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    heapifyDown(index) {
        const size = this.heap.length;

        while (true) {
            let smallest = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            if (left < size && this.heap[left] < this.heap[smallest])
                smallest = left;

            if (right < size && this.heap[right] < this.heap[smallest])
                smallest = right;

            if (smallest !== index) {
                [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];
                index = smallest;
            } else {
                break;
            }
        }
    }
}

maxHeap.insert(10);
maxHeap.insert(30);
maxHeap.insert(20);
maxHeap.insert(5);

console.log(maxHeap.heap); // [30, 10, 20, 5]

console.log(maxHeap.delete()); // 30
console.log(maxHeap.heap); // [20, 10, 5]

