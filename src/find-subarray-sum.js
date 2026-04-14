/**
 * solution 1 -- variable sliding window size
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums - only non-negative numbers
 * @param {number} targetSum
 * @returns {[number, number]} - valid subarray [startIndex, endIndex]
 */
function findSubarraySum(nums, targetSum) {
    let start = 0;
    let windowSum = 0;

    for (let end = 0; end < nums.length; end++) {
        windowSum += nums[end]; // add leading elem

        while (windowSum > targetSum) {
            // decrease window sum
            // remove trailing elem
            windowSum -= nums[start];
            start++;
        }

        if (windowSum === targetSum) {
            return [start, end];
        }
    }

    return [-1, -1];
}

console.log(findSubarraySum([3, 1, 4, 9, 2, 1, 7, 5], 10)); // [4, 6]
