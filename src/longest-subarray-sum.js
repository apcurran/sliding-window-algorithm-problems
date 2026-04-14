/**
 * solution 1 -- dynamic sliding window
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number} - longest length of subarray summing up to target
 */
function longestSubarraySum(nums, target) {
    let start = 0;
    let windowSum = 0;
    let longestSubarrayLength = -1; // default to -1 if no match is found

    for (let end = 0; end < nums.length; end++) {
        windowSum += nums[end]; // add leading value

        while (windowSum > target) {
            // remove trailing value
            windowSum -= nums[start];
            start++;
        }

        if (windowSum === target) {
            const currentSubarrayLength = end - start + 1;
            longestSubarrayLength = Math.max(longestSubarrayLength, currentSubarrayLength);
        }
    }

    return longestSubarrayLength;
}

console.log(longestSubarraySum([4, 3, 3, 2, 1, 5, 2, 3, 5, 10, 1], 10)); // 4
