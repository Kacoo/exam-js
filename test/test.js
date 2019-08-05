var test = [{

        "code": "ceshi.xuanz",
        "createTime": "2019-08-01 15:03:31",
        "name": "测试选择",
        "remark": null,
        "id": 241,
        "platform": "portal"
    }
];

var a2 = test.map(function (item, index, array) {
    var temp = Object.assign({}, item);
    delete temp.createTime;
    delete temp.remark;
    delete temp.id;
    delete temp.platform;
    return temp;
})

// var a3 = a2.filter(function(item, index, array) {
//     return item.code.indexOf("portal") > -1;
// })

var a3 = a2.filter(function (item, index, array) {
    return item.code.indexOf("app") > -1;
})

console.log(a2);