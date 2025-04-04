class Solution {
    /**
     * @param {number[]} nums - An array of numbers where every number appears twice, 
     * except for one number which appears once.
     * @return {number} - The single number that appears only once in the array.
     */
    singleNumber(nums) {
        // Create a set to store numbers as we encounter them.
        const seen = new Set();

        // Iterate over each number in the array.
        for (const num of nums) {
            // If the number is already in the set, remove it (it's a duplicate).
            if(seen.has(num)) {
                seen.delete(num);
            } else {
                // If the number is not in the set, add it.
                seen.add(num);
            }
        }

        // At the end, the set will only contain the number that appears once.
        // Convert the set to an array and return the first (and only) element.
        return Array.from(seen)[0];
    }
}


// Hash map approach - Time Complexity of O(n)
function singleNumber(nums) {

    // Use a Hashmap to store the key for elements in the nums arr. And store the number of occurrences for that element as the value.
    let map = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        map.set(nums[i], map.get(nums[i]) + 1); // Increment the count for the existing number
      } else {
        map.set(nums[i], 1); // Initialize the count to 1 for the first occurrence
      }
    }
  
    // Find and return the number that appears only once in the map, 
    for (let [key, value] of map) {
      if (value === 1) {
        return key;
      }
    }
  }
