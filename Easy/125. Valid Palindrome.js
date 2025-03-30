/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    //Initialize left and right pointers
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move left pointer if not alphanumeric
        if (!isAlphaNumeric(s[left])) {
            left++;
        }
        // Move right pointer if not alphanumeric
        else if (!isAlphaNumeric(s[right])) {
            right--;
        } 
        // Check if characters are equal
        else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        } else { // Else move both pointers
            left++;
            right--;
        }
    }
    return true;

    //Helper function to check if the character is alphanumeric (a letter or a digit)
    function isAlphaNumeric(char) {
        return /[a-zA-Z0-9]/.test(char); 
    }
};
