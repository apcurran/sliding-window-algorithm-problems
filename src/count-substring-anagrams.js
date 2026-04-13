/**
 * solution 1 -- hashmaps and sliding window
 * time: O(n * k)
 * space: O(k)
 *
 * @param {string} str
 * @param {string} anagram
 * @returns {number}
 */
function countSubstringAnagrams(str, anagram) {
    if (anagram.length > str.length) {
        return 0;
    }

    let anagramMap = getMapFromStr(anagram);
    let strWindowMap = getMapFromStr(str.slice(0, anagram.length));
    let matchesCount = areMapsEqual(strWindowMap, anagramMap) ? 1 : 0;

    for (let i = 0; i < str.length - anagram.length; i++) {
        const trailingChar = str[i];
        const leadingChar = str[i + anagram.length];

        const revisedTrailingCount = strWindowMap.get(trailingChar) - 1;

        if (revisedTrailingCount === 0) {
            strWindowMap.delete(trailingChar);
        } else {
            strWindowMap.set(trailingChar, revisedTrailingCount);
        }

        const revisedLeadingCount = (strWindowMap.get(leadingChar) || 0) + 1;
        strWindowMap.set(leadingChar, revisedLeadingCount);

        if (areMapsEqual(strWindowMap, anagramMap)) {
            matchesCount++;
        }
    }

    return matchesCount;
}

console.log(countSubstringAnagrams("gattactat", "att")); // 3

/**
 * @param {string}
 * @returns {Map}
 */
function getMapFromStr(str) {
    let map = new Map();

    for (let char of str) {
        const prevCharCount = map.get(char) || 0;
        map.set(char, prevCharCount + 1);
    }

    return map;
}

/**
 * @param {Map} map1
 * @param {Map} map2
 * @returns {boolean}
 */
function areMapsEqual(map1, map2) {
    if (map1.size !== map2.size) {
        return false;
    }

    for (let [map1Char, map1CharCount] of map1) {
        const map2CharCount = map2.get(map1Char);

        if (
            map2CharCount !== map1CharCount ||
            (map2CharCount === undefined && !map2.has(map1Char))
        ) {
            return false;
        }
    }

    return true;
}
