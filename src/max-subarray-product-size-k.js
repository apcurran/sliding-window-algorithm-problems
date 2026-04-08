/**
 * solution 1 -- sliding window
 * time: O(n - k)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number} sum
 */
function maxSubarrayProductSizeK(nums, k) {
    let currentProduct = 1;

    for (let i = 0; i < k; i++) {
        currentProduct *= nums[i];
    }

    let maxProduct = currentProduct;

    for (let i = 0; i < nums.length - k; i++) {
        // remove left value via division op
        currentProduct /= nums[i];
        // multiply right value to increase max product
        currentProduct *= nums[i + k];
        // revise max
        maxProduct = Math.max(maxProduct, currentProduct);
    }

    return maxProduct;
}

console.log(maxSubarrayProductSizeK([1, 4, 1, 6, -3, 3, -5, 2, 26], 4)); // 270
