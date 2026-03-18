const assert = require("../sorting/mergeSort");
const { mergeSort, merge } = require('../sorting/mergeSort');// Adjust path if needed

// Test cases for merge function
(function testMerge() {
    assert.deepStrictEqual(merge([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);
    assert.deepStrictEqual(merge([], [1, 2]), [1, 2]);
    assert.deepStrictEqual(merge([1, 2], []), [1, 2]);
    assert.deepStrictEqual(merge([], []), []);
    assert.deepStrictEqual(merge([1, 1, 2], [1, 3]), [1, 1, 1, 2, 3]);
    console.log("merge() tests passed");
})();

// Test cases for mergeSort function
(function testMergeSort() {
    // Basic sorting
    assert.deepStrictEqual(mergeSort([5, 3, 8, 4, 2]), [2, 3, 4, 5, 8]);

    // Already sorted
    assert.deepStrictEqual(mergeSort([1, 2, 3]), [1, 2, 3]);

    // Reverse sorted
    assert.deepStrictEqual(mergeSort([3, 2, 1]), [1, 2, 3]);

    // Duplicates
    assert.deepStrictEqual(mergeSort([4, 4, 2, 2, 1]), [1, 2, 2, 4, 4]);

    // Single element
    assert.deepStrictEqual(mergeSort([42]), [42]);

    // Empty array
    assert.deepStrictEqual(mergeSort([]), []);

    // Negative numbers
    assert.deepStrictEqual(mergeSort([-3, -1, -2, 0]), [-3, -2, -1, 0]);

    // Large array performance (just check sorted property)
    const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
    const sortedLarge = mergeSort(largeArray);
    assert(sortedLarge.every((v, i, arr) => i === 0 || arr[i - 1] <= v));

    console.log(" mergeSort() tests passed");
})();
