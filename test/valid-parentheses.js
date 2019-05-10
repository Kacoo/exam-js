// https://leetcode.com/problems/valid-parentheses/
var isValid = function (s) {
    if ("" == s) {
        return true;
    } else if (0 != s.length % 2) {
        return false;
    }


    var a = s.split("");
    var cur = 0;
    var obj = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    while (cur >= 0 && a.length) {
        var flag1 = a.indexOf(")") >= 0 ? a.indexOf(")") : a.length;
        var flag2 = a.indexOf("]") >= 0 ? a.indexOf("]") : a.length;
        var flag3 = a.indexOf("}") >= 0 ? a.indexOf("}") : a.length;
        var flag = Math.min(flag1, flag2, flag3);
        if (a[flag] != obj[a[flag - 1]]) {
            return false;
        }
        a.splice(flag - 1, 2);
        // cur++;
    }
    return true;
}

alert(isValid("()"));