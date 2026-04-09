/**
 * solution 1 -- sliding window
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @param {number} k
 * @returns {number} count
 */
function subarrayTargetSumSizeK(nums, target, k) {
    let currentSum = 0;

    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }

    let count = currentSum === target ? 1 : 0;

    for (let left = 0; left < nums.length - k; left++) {
        currentSum -= nums[left];
        currentSum += nums[left + k];

        if (currentSum === target) {
            count++;
        }
    }

    return count;
}

console.log(subarrayTargetSumSizeK([2, 3, 2, 2, 3, 1, 3, 8, 5, 0, 2, 4], 7, 3));
// 5
