class Solution {
  /**
   * @param {number[]} nums - An array of numbers that may contain duplicates.
   * @return {boolean} - Return true if any number appears more than once, otherwise false.
   */
  hasDuplicate(nums) {
      // Create a Set to track numbers that we've seen already.
      let set = new Set();

      // Iterate over each number in the array.
      for (const num of nums) {
          // Check if the current number is already in the set.
          if (set.has(num)) {
              // If the number is in the set, it means we've seen it before, so we return true.
              return true;
          } else {
              // If the number is not in the set, add it to the set.
              set.add(num);
          }
      }

      // If the loop finishes without finding a duplicate, return false.
      return false;
  }
}


// Time Complexity: O(n)
// - We iterate through the array once, where `n` is the length of the array. 

