class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */ // Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

  // Example 1, Input: nums = [1, 2, 3, 3]
  // Output = true

  // Example 2, Input: nums = [1, 2, 3, 4]
  // Output: false

  // Brute force O(n^2) solution
  hasDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          // i = 2,  3 = 3
          return true;
        }
      }
    }
    return false;
  }

  // Better solution O(nlogn) Sorting + Lopp
  hasDuplicate(nums) {
    nums.sort((a, b) => a - b); // Sort Array in Ascending order [1,2,3,3]
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
        return true;
      }
    }
    return false;
  }
}
