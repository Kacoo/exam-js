/**
 * leetcode@Kacoo
 * 29. divide-two-integers
 * https://leetcode.com/problems/divide-two-integers/
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    // 判断符号位
    var flag = 0 == ((dividend ^ divisor) >> 31) ? true : false;

    var count = 0;
    dividend = -Math.abs(dividend);
    divisor = Math.abs(divisor);
    count = add(dividend, divisor, count);
    if (count == 2147483648 && flag) return 2147483647;
    return 0 == count ? 0 : flag ? count : -count;
};

function add(a, b, c) {
    return a + b > 0 ? c : arguments.callee(a + b, b, ++c);
}

console.log(divide(2147483647, 3));