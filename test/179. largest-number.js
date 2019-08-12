/**
 * leetcode@Kacoo
 * 179. Largest Number
 * https://leetcode.com/problems/largest-number/
 */

/**
 * 
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    var array = nums.map((item, index) => {
        return {
            index: index,
            value: item
        };
    });

    array.sort(_compare);


    // 重写compare()方法
    // 传入两个对象，比较谁作为高位数字会让整个数字最大
    function _compare(value1, value2) {
        var temp1 = "" + value1.value;
        var temp2 = "" + value2.value;
        len = temp1.length > temp2.length ? temp1.length : temp2.length;
        // 循环结束的标识：i < 最长的数字长度*2，是为了确认[830 830 830 830 8, 830]这种循环数字的位置关系（前者放高位，数字会大一点）
        for (var i = 0; i < len * 2; i++) {
            var a = temp1[i % temp1.length];
            var b = temp2[i % temp2.length];
            if (a > b) {
                return -1;
            } else if (a < b) {
                return 1;
            } else {
                continue;
            }
        }
        // 对比到这份儿上了，还是都相等，说明谁前谁后都一样= =
        return 1;
    }

    // 大神的_compare()
    // 感叹算法之美
    function _compare2(a, b) {
        return '' + a + b > '' + b + a ? -1 : 1;
    }

    var temp = "";

    for (var i = 0; i < array.length; i++) {
        temp = temp + array[i].value;
    }
    // 0. 最终输出的是字符串，不是数字
    // 1. 如果每一项都是0，需要输出字符串"0"
    return 0 == Number(temp) ? "0" : temp;

};

largestNumber([4704, 6306, 9385, 7536, 3462, 4798, 5422, 5529, 8070, 6241, 9094, 7846, 663, 6221, 216, 6758, 8353, 3650, 3836, 8183, 3516, 5909, 6744, 1548, 5712, 2281, 3664, 7100, 6698, 7321, 4980, 8937, 3163, 5784, 3298, 9890, 1090, 7605, 1380, 1147, 1495, 3699, 9448, 5208, 9456, 3846, 3567, 6856, 2000, 3575, 7205, 2697, 5972, 7471, 1763, 1143, 1417, 6038, 2313, 6554, 9026, 8107, 9827, 7982, 9685, 3905, 8939, 1048, 282, 7423, 6327, 2970, 4453, 5460, 3399, 9533, 914, 3932, 192, 3084, 6806, 273, 4283, 2060, 5682, 2, 2362, 4812, 7032, 810, 2465, 6511, 213, 2362, 3021, 2745, 3636, 6265, 1518, 8398]);