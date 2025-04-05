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


// Alternative Solution using HashMap - O(n) time complexity
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++)
    {
        if(map.has(nums[i]))
        {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    for (let [key, value] of map)
    {
        if (value > 1)
        {
            return true;
        }
    }
    return false;
};
