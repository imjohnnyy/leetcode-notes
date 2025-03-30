class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * 
     */    //  e.g. nums = [3,4,5,6], target = 7
     
    //  Optimal solution O(n) 
        twoSum(nums, target) {
            let map = new Map();  

            for (let i = 0; i < nums.length; i++) {
                const diff = target - nums[i];  // 7 - 4 = 3
                if (map.has(diff)) {          
                    return [map.get(diff), i]; // [0, 1]
                }
                map.set(nums[i], i);        // {3: 1}
            }
        }
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

