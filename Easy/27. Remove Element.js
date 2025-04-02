/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) { 
    let index = 0; // Pointer to track where the next non-'val' element should be placed.

    // Loop through the entire array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is NOT equal to 'val', we keep it
        if (nums[i] !== val) {
            nums[index] = nums[i]; // Move the non-'val' element to the 'index' position
            index++; // Increment 'index' to point to the next insertion position
        }
    }
    
    // 'index' now represents the new length of the modified array (excluding 'val' elements)
    return index;
};

// Time complexity is O(n) - where n is the size of the input array