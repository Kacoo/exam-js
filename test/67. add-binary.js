/**
 * leetcode@Kacoo
 * 67. add-binary 
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    if ("0" == a && "0" == b) {
        return "0";
    }
    var a1 = a.split("").length > b.split("").length ? a.split("").reverse() : b.split("").reverse();
    var b1 = a.split("").length > b.split("").length ? b.split("").reverse() : a.split("").reverse();
    var s = "";
    var flag = false;
    var tempS;
    var temp = 0;
    for (var i = 0; i < a1.length; i++) {
        temp = flag ? 1 : 0;
        if (b1[i]) {
            flag = parseInt(a1[i]) + parseInt(b1[i]) + temp > 1 ? true : false;
            tempS = (parseInt(a1[i]) + parseInt(b1[i]) + temp) % 2;
        } else {
            flag = parseInt(a1[i]) + temp > 1 ? true : false;
            tempS = (parseInt(a1[i]) + temp) % 2;
        }
        s = s + tempS;
    }
    s = flag ? s + "1" : s;
    console.log(a, b);
    console.log(a1, b1);
    console.log(s.split("").reverse().join(""));
};

addBinary("1010", "10111");