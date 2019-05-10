// https://leetcode.com/problems/reverse-integer/
function getArray(num) {
    temp = Math.abs(num);
    var array = [];
    var i = 0;
    while (temp > 0 && temp % 10 >= 0) {
        array[i] = temp % 10;
        temp = Math.floor(temp / 10);
        i++;
    }
    return array;
}

function printArray(x) {
    var str = x >= 0 ? "" : "-";
    if (0 == x || -2e31 > x || 2e31 - 1 < x) {
        return 0;
    } else {
        temp = getArray(x);
        for (var i = 0; i < temp.length; i++) {
            str = str + temp[i];
        }
        return str;
    }
}