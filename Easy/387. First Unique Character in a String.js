/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let seen = new Set();
    let unique = new Set();

    // Check unique and repeated characters
    for (let char of s) {
        if (seen.has(char)) {
            unique.delete(char);
        } else {
            seen.add(char);
            unique.add(char);
        }
    }

    // Second loop to check if unique char is in string
    for (let i = 0; i < s.length; i++)
    {
        if (unique.has(s[i])) {
            return i;
        }
    }

    return -1;
};

// This solution is O(n) as there are two different iterations over the string 's'. (Note: It's not O(n^2) as its a not nested loop)