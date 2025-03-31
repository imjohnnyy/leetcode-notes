/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1); // set1 = [1,2]
    let unique = new Set(); // unique = [2]

    for (let num of nums2) { 
        if (set1.has(num)) {
            unique.add(num);
        }
    }

    return [...unique];

};

// Time complexity is O(n + m), where n is the size of nums1, and m is the size of nums2

