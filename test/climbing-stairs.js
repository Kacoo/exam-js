/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (1 > n) return 0;
    if (1 == n) return 1;
    if (2 == n) return 2;
    return climbStairs(n - 1) + climbStairs(n - 2);
};