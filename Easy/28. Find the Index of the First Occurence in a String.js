/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    for (let i = 0; i < haystack.length; i++)
    {
      if (haystack.substring(i, i + needle.length) === needle)  // substring(i, i + needle.length) ensures that the substring has the exact same length as needle.
      {
        return i;
      }
    }
    return -1;
};