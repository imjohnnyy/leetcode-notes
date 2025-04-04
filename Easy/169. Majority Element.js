/**
 * @param {number[]} nums
 * @return {number}
 */

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    // Use a HashMap to store unique elements as the Key. Its corresponding Value would be the number of occurences.

    let map = new Map();
    let maxValue = -Infinity;
    let maxKey = null;

    for (let i = 0; i < nums.length; i++)
    {
        if (map.has(nums[i]))
        {
            map.set(nums[i], map.get(nums[i]) + 1); // Increment the value of existing element in Map, 
        } else {
            map.set(nums[i], 1); // Sets element in Map with initial count of 1 as its value.
        }
    }

    // console.log(map);
    // Loop through the HashMap to find element with the max value - then we return the key of that element.
    for (let [key, value] of map)
    {
        if (value > maxValue) {
            maxValue = value;
            maxKey = key;
        }
    }
    return maxKey;

    

};

// Time complexity of O(n) - where n is the number of elements in the nums array