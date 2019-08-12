/**
 * leetcode@Kacoo
 * 27. remove-element
 */

var removeElement = function (nums, val) {
    for (var i = 0; i < nums.length;) {
        if (val == nums[i]) {
            nums.splice(i, 1);
        } else i++;
    }
    return nums.length + nums;
};

alert(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));