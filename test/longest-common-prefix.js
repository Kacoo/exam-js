var longestCommonPrefix = function () {
    // var strs = ["add", "adminus", "admultiple", "adivice"];
    var strs = ["ca", "a"];
    newStrs = strs.sort(compare);
    array0 = combinations(newStrs[0]);
    for (var i = array0.length - 1; i >= 0; i--) {
        var flag = 0;
        for (var j = 1; j < newStrs.length; j++) {
            if (newStrs[j].indexOf(array0[i]) != 0) {
                break;
            } else {
                flag++;
            }
        }
        if (newStrs.length - 1 == flag) {
            return array0[i];
        }
    }
    return "";
};

alert(longestCommonPrefix);

// 字符串按字符数量从小到大排序
function compare(v1, v2) {
    if (v1.length < v2.length) {
        return -1;
    } else {
        return 1;
    }
}

// 获取字符数最小的字符串的字串排列组合，如"abc"->['a','ab','abc']
function combinations(s) {
    var temp = [];
    sp = s[0];
    temp.push(sp);
    for (var j = 1; j < s.length; j++) {
        sp = sp + s[j];
        temp.push(sp);
    }
    return temp;
}

// // 获取字符数最小的字符串的字串排列组合，如"abc"->['a','ab','abc','b','bc','c']
// // 并将其按照字符数从小到大排列，最终变成->["a", "b", "c", "ab", "bc", "abc"]
// function combinations(s) {
//     var temp = [];
//     for (var i = 0; i < s.length; i++) {
//         sp = s[i];
//         temp.push(sp);
//         for (var j = i + 1; j < s.length; j++) {
//             sp = sp + s[j];
//             temp.push(sp);
//         }
//     }
//     temp.sort(compare);
//     return temp;
// }