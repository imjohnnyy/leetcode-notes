/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length -1;

    while (left < right)
    {
        [s[left], s[right]] = [s[right], s[left]]; //Swapping them
        left++; right--; //Move pointers toward center
    }
    return s;
};


// Time Complexity is O(n), where n is the length of the string
