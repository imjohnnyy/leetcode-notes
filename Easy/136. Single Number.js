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
