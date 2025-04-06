/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--; // Decrement is necessary because after splice, the array shifts and we need to re-check the current index
        }
    }
    return nums.length;
};

// Time complexity is O(n) - where n is the size of the input array