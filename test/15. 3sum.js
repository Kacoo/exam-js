/**
 * leetcode@Kacoo
 * 15. 3sum
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    var len = nums.length;
    if (len === 3 && nums[0] + nums[1] + nums[2] === 0) return [nums];
    var ret = [];
    var temp = nums.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < len; i++) {
        if (i != 0 && temp[i] == temp[i - 1]) continue;
        var j = i + 1,
            k = len - 1;
        while (j < k) {
            var sum = temp[i] + temp[j] + temp[k];
            if (sum === 0) {
                var arr = [temp[i], temp[j], temp[k]]
                ret.push(arr);
                // 3sum精华，巧妙去重
                // 在3sum之和等于0的情况下，去掉数组中重复的值
                // 先将j + 1，再判断 j 是否小于 k， 如果下标为j - 1和j的值相同，继续循环，直至下标为j - 1和j的值相同
                while (++j < k && temp[j - 1] === temp[j]) {}
                while (--k > j && temp[k + 1] === temp[k]) {}
            } else if (sum < 0) {
                ++j;
            } else {
                --k;
            }
        }
    }
    return ret;

};

// var threeSum = function (nums) {
//     // 定义一个返回的新数组
//     var newNums = [];

//     // nums长度 < 3，直接返回newNums
//     if (!nums.length || nums.length < 3) {
//         return newNums;
//     }

//     // 0. 升序排序
//     nums.sort(compare);

//     // 1. 将数组分为三部分，正数、负数、零
//     var positiveNums = nums.filter(function (item) {
//         return item > 0;
//     });
//     var negativeNums = nums.filter(function (item) {
//         return item < 0;
//     });
//     var zeroNums = nums.filter(function (item) {
//         return item == 0;
//     });

//     // 2. 有零
//     if (zeroNums.length) {
//         for (var i in negativeNums) {
//             for (var j in positiveNums) {
//                 if (negativeNums[i] == -positiveNums[j]) {
//                     newNums.push([negativeNums[i], 0, positiveNums[j]]);
//                 }
//             }
//         }
//     }

//     // 3. 有零 > 3
//     if (zeroNums.length >= 3) {
//         newNums.push([0, 0, 0]);
//         // if (!negativeNums.length || !positiveNums.length || negativeNums.length + positiveNums.length < 2) {
//         //     // 正数数组or负数数组没有值or长度和 < 2，不作处理
//         // }
//     }
//     for (var i in negativeNums) {
//         var temp = isEqualSum(positiveNums, negativeNums[i]);
//         for (var j in temp) {
//             newNums.push(temp[j]);
//         }
//     }
//     for (var i in positiveNums) {
//         var temp = isEqualSum(negativeNums, positiveNums[i]);
//         for (var j in temp) {
//             newNums.push(temp[j]);
//         }
//     }




//     // end. 去重
//     newNums = deduplicate(newNums);
//     return newNums;
// };


// 升序排列
function compare(v1, v2) {
    if (v1 < v2) {
        return -1;
    } else if (v1 > v2) {
        return 1;
    } else {
        return 0;
    }
}

// 计算数组之中二数之和是否等于给定数字，是：返回相应组合
function isEqualSum(nums, sum) {
    var newNums = [];
    if (!nums.length || nums.length < 2) {
        return;
    }
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (-sum == nums[i] + nums[j]) {
                newNums.push([sum, nums[i], nums[j]].sort(compare));
            }
        }
    }
    return newNums;
}

// 二元数组去重
function deduplicate(nums) {
    isEqual = false;
    for (var i = 0; i < nums.length; i++) {
        var j = i + 1;
        while (nums[j]) {
            var len = 3;
            for (var k = 0; k < len; k++) {
                if (nums[i][k] != nums[j][k]) {
                    isEqual = false;
                    break;
                }
                isEqual = true;
            }
            if (isEqual) {
                nums.splice(j, 1);
                continue;
            }
            j++;
        }
    }
    return nums;
}

threeSum([-1, 0, 1, 2, -1, -4, 0, 0]);
// threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]);