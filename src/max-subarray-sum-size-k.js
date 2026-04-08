/**
 * solution 1 -- brute force
 * time: O(n * k)
 * space: O(k)
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number} sum
 */
function maxSubarraySumSizeK(nums, k) {
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length - k; i++) {
        const kSlice = nums.slice(i, i + k);
        const kSliceSum = kSlice.reduce((sum, curr) => sum + curr, 0);
        maxSum = Math.max(maxSum, kSliceSum);
    }

    return maxSum;
}

console.log(maxSubarraySumSizeK([1, 4, 1, 10, 25, 3, 5, 0, 26], 4)); // 43
