class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * 
     */    //  e.g. nums = [3,4,5,6], target = 7
     
    //  Optimal solution O(n) 
    twoSum(nums, target) {
        // Create a map to store each number and its index as we iterate through the array
        let map = new Map();
    
        // Loop through the array to check for each element
        for (let i = 0; i < nums.length; i++) {
            // Calculate the complement that we need to find in the map
            let complement = target - nums[i];
    
            // Check if the complement is already in the map
            if (map.has(complement)) {
                // If found, return the indices of the complement and the current number
                return [map.get(complement), i];
            }
            // Otherwise, store the current number and its index in the map
            map.set(nums[i], i);
        }
    
        // If no solution is found, return an empty array (optional, but good practice)
        return [];
    }


    // - Brute force O(n^2) solution

    twoSum(nums, target) {  
        for (let i = 0; i < nums.length; i++) // The outer loop (i) picks an element.
        {
            for (let j = i + 1; j < nums.length; j++) // The inner loop (j) checks all elements after i to see if their sum equals target.
            {
                if (nums[i] + nums[j] === target)
                {
                    return [i, j];
                }
            }
        }
    }

