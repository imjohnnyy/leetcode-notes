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

        let sSort = s.split("").sort().join(); // s = "racecar" becomes a,a,c,c,e,r,r
        let tSort = t.split("").sort().join(); // t = "carrace" becomes a,a,c,c,e,r,r
        
        return sSort == tSort // If sSort equals tSort then return true, else false
    }

    // Initial solution - only passes 3/22 test cases, time complexity of O(n^2logn)
    isAnagram(s, t) {
        let sArr = [];
        let tArr = [];
        for (let i = 0; i < s.length; i++)
        {
            if (!sArr.includes(s[i]))
            {
                sArr.push(s[i]);
            }
        }

        for (let j = 0; j < t.length; j++)
        {
            if (!tArr.includes(t[j]))
            {
                tArr.push(t[j]);
            }
        }

         sArr.sort();
         tArr.sort();

        if ((JSON.stringify(sArr) === JSON.stringify(tArr)))
        {
            return true;
        }
        return false;
    }
}
