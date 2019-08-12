/**
 * leetcode@Kacoo
 * 26. remove-duplicates-from-sorted-array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

var removeDuplicates = function (nums) {
    for (var i = 0; i < nums.length;) {
        if (nums[i] == nums[i + 1]) {
            nums.splice(i + 1, 1);
        } else i++;
    }
    return "[" + nums + "]";
};

alert(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));