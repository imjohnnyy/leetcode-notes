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
    let stack = [];  // Initialize an empty stack to track opening brackets.

    // Loop through each character in the input string
    for (let i = 0; i < s.length; i++) {
        // If the current character is an opening bracket, push the corresponding closing bracket to the stack
        if (s[i] === "(") {
            stack.push(")");  // Expected closing bracket is ')'
        } else if (s[i] === "[") {
            stack.push("]");  // Expected closing bracket is ']'
        } else if (s[i] === "{") {
            stack.push("}");  // Expected closing bracket is '}'
        } 
        // If the current character is a closing bracket, check if it matches the top of the stack
        else if (s[i] !== stack.pop()) {
            // If the current character doesn't match the expected closing bracket, return false immediately
            return false;
        }
    }

    // If the stack is empty at the end, all brackets were properly matched
    return stack.length === 0;  // If stack is empty, the string is valid.
};

// Example:
console.log(isValid("({[]})"));  // true

// Step-by-step breakdown of the example: 
// s = "({[]})"

// 1. '(' → push ')' to the stack
//    stack = [')']
// 2. '{' → push '}' to the stack
//    stack = [')', '}']
// 3. '[' → push ']' to the stack
//    stack = [')', '}', ']']
// 4. ']' → check if it matches the top of the stack (stack.pop() returns ']')
//    stack = [')', '}'] (valid match)
// 5. '}' → check if it matches the top of the stack (stack.pop() returns '}')
//    stack = [')'] (valid match)
// 6. ')' → check if it matches the top of the stack (stack.pop() returns ')')
//    stack = [] (valid match)

// End of loop, stack is empty, so return true (valid parentheses)
