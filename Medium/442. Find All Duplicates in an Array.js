/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let map = new Map();
    let duplicates = [];

    for (let i = 0; i < nums.length; i++) {
     if (map.has(nums[i])) {  // Check for each unique value (key) in nums array, then increment its value (based on occurence)
        map.set(nums[i], map.get(nums[i]) + 1);  
     } else {
        map.set(nums[i], 1);
     }
    }

    // console.log(map); - Check to see what the map looks like at this point

    // Find the duplicates

    for(let [key, value] of map)
    {
        if (value > 1) {
            duplicates.push(key);
        }
    }

    return duplicates;
};

// Time Complexity of O(n) because we loop through the 'nums' array once and then loop through the Map (which can have at most n unique elements).