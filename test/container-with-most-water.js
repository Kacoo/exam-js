// https://leetcode.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var area = 0;
    for (var i = height.length - 1; i >= 0; i--) {
        var j = i - 1;
        while (height[j] > -1) {
            var temp = (i - j) * Math.min(height[i], height[j]);
            area = temp > area ? temp : area;
            j--;
        }
    }
    return area;
};

var a = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(a);