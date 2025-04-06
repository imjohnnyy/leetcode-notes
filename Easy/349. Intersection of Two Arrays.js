/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */


// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]


var intersection = function(nums1, nums2) {
    let intersection = [];

   let set1 = new Set(nums1); // [1,2]
   let set2 = new Set(nums2); // [2]

   for(let element of set1)
   {
       if(set2.has(element))
       {
           intersection.push(element);
       }
   }
   return intersection;
};


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

