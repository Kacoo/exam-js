/**
 * leetcode@Kacoo
 * 53. maximum-subarray 
 */
// var maxSubArray = function (nums) {
//     var sum = 0;
//     var flag = 0;
//     var newArray = [];
//     for (var i = 0; i < nums.length; i++) {
//         var temp = [];
//         temp[0] = nums[i];
//         var copy1 = JSON.parse(JSON.stringify(temp))
//         newArray.push(copy1);
//         for (var j = i + 1; j < nums.length; j++) {
//             temp.push(nums[j]);
//             var copy = JSON.parse(JSON.stringify(temp));
//             newArray.push(copy);
//         }
//     }
//     sum = add(newArray[0]);
//     for (var m = 1; m < newArray.length; m++) {
//         var copy2 = JSON.parse(JSON.stringify(newArray[m]));
//         flag = sum > add(copy2) ? flag : m;
//         sum = sum > add(copy2) ? sum : add(copy2);
//     }
//     // return newArray[flag];
//     return add(newArray[flag]);
// };


// my solution
// var maxSubArray = function (nums) {
//     var sum = nums[i];
//     for (var i = 0; i < nums.length; i++) {
//         var temp = 0;
//         for (var j = i; j < nums.length; j++) {
//             temp =  temp + nums[j];
//             sum = sum > temp ? sum : temp;
//         }
//     }
//     return sum;
// };


// https://leetcode.com/problems/maximum-subarray/discuss/20471/JavaScript-solution
function maxSubArray(A) {
    var prev = 0;
    var max = -Number.MAX_VALUE;
  
    for (var i = 0; i < A.length; i++) {
      prev = Math.max(prev + A[i], A[i]);
      max = Math.max(max, prev);
    }
    return max;
  }

// 数组按字符数量从小到大排序
function compare(v1, v2) {
    if (v1.length < v2.length) {
        return -1;
    } else {
        return 1;
    }
}

// 数组各项相加
function add(array) {
    var sum = 0;
    for (var i in array) {
        sum = sum + array[i];
    }
    return sum;
}


document.write(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

maxSubArray([-2, 1, -3]);
// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// alert(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // [4,-1,2,1] has the largest sum = 6.