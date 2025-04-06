class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {  // Time complexity of O(nlogn+mlogm)
      if (s.length !== t.length) {
            return false;
        }

        let sSort = s.split("").sort().join(); // s = "racecar" becomes a,a,c,c,e,r,r    // split("") – turns string into an array of letters          
        let tSort = t.split("").sort().join(); // t = "carrace" becomes a,a,c,c,e,r,r   //  sort() - sorts the array 
                                                                                        // join("") – converts it back to a string      
        return sSort == tSort; // If sSort equals tSort then return true, else false    
    }
}
