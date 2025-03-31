/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    let left = 0;
    let right = str.length - 1;

    while (left < right)
    {
        if (str[left] === str[right])
        {
            left++; right--;
        } else {
            return false;
        }
    }
    return true;

};

//Time Complexity is O(n) - where 'n' is the length of the digit 'x'