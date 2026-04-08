// /**
//  * solution 1 -- brute force
//  * time: O(n * k)
//  * space: O(k)
//  *
//  * @param {number[]} nums
//  * @param {number} k
//  * @returns {number} sum
//  */
// function maxSubarraySumSizeK(nums, k) {
//     let maxSum = -Infinity;

//     for (let i = 0; i <= nums.length - k; i++) {
//         const kSliceSum = nums.slice(i, i + k).reduce((sum, curr) => sum + curr, 0);
//         maxSum = Math.max(maxSum, kSliceSum);
//     }

//     return maxSum;
// }

/**
 * solution 2 -- sliding window
 * time: O(n - k)
 * space: O(k)
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number} sum
 */
function maxSubarraySumSizeK(nums, k) {
    const kSliceSum = nums.slice(0, k).reduce((sum, curr) => sum + curr, 0);
    let currentSum = kSliceSum;
    let maxSum = kSliceSum;

    for (let left = 1; left <= nums.length - k; left++) {
        // sub old left value
        currentSum -= nums[left - 1];
        // add new right value
        currentSum += nums[left + k - 1];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(maxSubarraySumSizeK([1, 4, 1, 10, 25, 3, 5, 0, 26], 4)); // 43
