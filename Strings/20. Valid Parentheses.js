/**
 * Function to check if a given string of parentheses is valid.
 * A string is valid if:
 * - Open brackets are closed by the same type of brackets.
 * - Open brackets are closed in the correct order.
 * - Every close bracket has a corresponding open bracket.
 * 
 * @param {string} s - Input string containing only '(', ')', '{', '}', '[' and ']'.
 * @return {boolean} - Returns true if the input string is valid, false otherwise.
 */
var isValid = function(s) {
    let stack = []; // Stack to keep track of expected closing brackets.

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(")");  // Push expected closing bracket
        } else if (s[i] === "[") {
            stack.push("]");  // Push expected closing bracket
        } else if (s[i] === "{") {
            stack.push("}");  // Push expected closing bracket
        } else if (s[i] !== stack.pop()) { 
            // If the current character is a closing bracket, check if it matches the top of the stack.
            // If it doesn't match, return false immediately. Otherwise, continue.
            return false;
        }
    }

    // If stack is empty at the end, all brackets matched correctly.
    return stack.length === 0;
};


// Time Complexity of O(n) - We iterate through the string once, where `n` is the length of the string.