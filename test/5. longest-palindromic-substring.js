/**
 * leetcode@Kacoo
 * 5. longest-palindromic-substring 
 * https://leetcode.com/problems/longest-palindromic-substring/
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s) {
        return "";
    }
    var l = s.length;
    if (1 == l) {
        return s;
    }
    for (var i = l; i > 1; i--) {
        var temp = listSubString(s, i);
        for (var j in temp) {
            if (isPalindrome(temp[j])) {
                return temp[j];
            }
        }
    }
    return s[0];
};

// 判断是否回文串
function isPalindrome(s) {
    var l = s.length;
    for (var i = 0; i <= l / 2; i++) {
        if (s[i] != s[l - i - 1]) {
            return false;
        }
    }
    return true;
}

// 列出长度为n的子串
function listSubString(s, n) {
    var l = s.length;
    var temp = [];
    for (var i = 0; i + n <= l; i++) {
        temp[i] = s.substr(i, n);
    }
    return temp;
}