/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let arr = [];
    
    for(let i = 0; i < strs.length; i++)
    {
        if (isAlphaNumeric(strs[i])) // Check if it has both digits and letters
        {
            // Check if the string is numeric
            if (!isNaN(strs[i])) {
                arr.push(parseInt(strs[i]));  // Convert to integer (e.g., "0009" -> 9)
            } else {
                arr.push(strs[i].length);   // If string is not a number
            }
        } else {
            arr.push(strs[i].length); // For non-numeric alphanumeric strings
        }
    }
    console.log(arr);

    return Math.max(...arr);

    function isAlphaNumeric(string)
    {
        return /[a-zA-Z0-9]/.test(string)
    }
};