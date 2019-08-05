/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function (nums) {
//     // 记录开始下标和结束下标即可
//     var len = nums.length;
//     var max = nums[0];
//     for (var i = 0; i < len; i++) {
//         var product = nums[i];
//         max = max > nums[i] ? max : nums[i];
//         for (var j = i + 1; j < len; j++) {
//             max = max > product * nums[j] ? max : product * nums[j];
//             product = product * nums[j];
//         }
//     }
//     return -0 == max ? 0 : max;
// };

/**
 * @param {number[]} nums
 * @return {number}
 * @description 给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。
 * @consideration 整数
 */
// 1.先按0作为分割线，把数组切分成若干个小数组
// 2.小数组内按照负值作为基准

const maxProduct = function (nums) {
    // 1.先拿到数组所有0的下标
    const indices = [];
    const target = 0;
    let idx = nums.indexOf(target);
    if (nums.length === 1) return nums[0];
    while (idx != -1) {
        indices.push(idx);
        idx = nums.indexOf(target, idx + 1);
    }

    if (!indices.length) return getMaxProduct(nums);

    // 2.用0下标作为切分点进行数组切割
    let max = nums[0];
    let curr = 0;

    let start = -1;
    let end = indices[curr];


    while (end >= 0) {
        const array = nums.slice(start + 1, end);
        max = Math.max(max, getMaxProduct(array));

        start = end;
        end = indices[++curr];
    }

    // 在有0的情况， max函数最终要和0做一下比较
    // 另一个问题，如果nums = [0, 2]或者nums = [-5, 0, 2]，curr的指向会有问题
    max = Math.max(max, getMaxProduct(nums.slice(indices[--curr] + 1)), 0);

    return max;
};

// 在一个确保没有0的数组里找最大值
const getMaxProduct = (array) => {
    const len = array.length;
    const minusList = [];
    let i = 0;
    while (i < len) {
        if (array[i] < 0) minusList.push(i);
        i++;
    }

    const minusLen = minusList.length;
    if (1 == len || minusLen % 2 === 0) {
        return multiply(array);
    } else {
        const headArray = array.slice(0, minusList[minusLen - 1]);
        const tailArray = array.slice(minusList[0] + 1);
        return Math.max(multiply(headArray), multiply(tailArray));
    }
}

const multiply = nums => {
    if (!nums.length) return null;
    return nums.reduce((total, num) => {
        return total * num;
    })
}

console.log(maxProduct(
    [0, 2]
));