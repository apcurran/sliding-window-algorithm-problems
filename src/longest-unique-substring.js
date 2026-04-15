/**
 * solution -- variable sliding window and hashmap
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {number} length of longest substring that is unique
 */
function longestUniqueSubstring(str) {
    let start = 0;
    let counterMap = new Map();
    let longest = 0;

    for (let end = 0; end < str.length; end++) {
        const leadingChar = str[end];
        // increment leading char count
        counterMap.set(leadingChar, (counterMap.get(leadingChar) || 0) + 1);

        while (counterMap.get(leadingChar) > 1) {
            // keep removing
            const trailingChar = str[start];
            counterMap.set(trailingChar, (counterMap.get(trailingChar) || 0) - 1);
            // move pointer forward
            start++;
        }

        longest = Math.max(longest, end - start + 1);
    }

    return longest;
}

console.log(longestUniqueSubstring("abcabcqbb")); // 4 ("abcq")
