/**
 * constraints -- guaranteed to have unique chars
 * solution 1 -- hashset
 * time: O(n * k)
 * space: O(k)
 *
 * @param {string} s
 * @param {string} anagram
 * @returns {boolean}
 */
function hasSubstringAnagram(s, anagram) {
    const k = anagram.length;
    const anagramSet = new Set(anagram);
    let windowSet = new Set(s.slice(0, k));

    if (windowSet.size === k && windowSet.isSubsetOf(anagramSet)) {
        return true; // return early, found a match
    }

    for (let i = 0; i < s.length - k; i++) {
        // remove left value
        windowSet.delete(s[i]);
        // add right value
        windowSet.add(s[i + k]);
        // perform comparison

        if (windowSet.size === k && windowSet.isSubsetOf(anagramSet)) {
            return true;
        }
    }

    return false;
}

console.log(hasSubstringAnagram("greyhounds", "hoy")); // true
