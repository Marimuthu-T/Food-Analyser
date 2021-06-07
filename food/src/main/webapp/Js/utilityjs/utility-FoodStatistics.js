
function groupByCategory(array) {
    var result = [];
    array.reduce(function (res, value) {
        if (!res[value['foodname']]) {
            res[value['foodname']] = { x: value['foodname'], y: 0 };
            result.push(res[value['foodname']]);
        }
        res[value['foodname']].y += value.rate;
        return res;
    }, {});
    return result;
}

function groupBycount(array) {
    var result = [];
    array.reduce(function (res, value) {
        if (!res[value['foodname']]) {
            res[value['foodname']] = { x: value['foodname'], y: 0 };
            result.push(res[value['foodname']]);
        }
        res[value['foodname']].y += value.count;
        return res;
    }, {});
    return result;
}
function groupByfoodordercount(array) {
    var result = [];
    array.reduce(function (res, value) {
        if (!res[value['custumername']]) {
            res[value['custumername']] = { x: value['custumername'], y: 0 };
            result.push(res[value['custumername']]);
        }
        res[value['custumername']].y += value.count;
        return res;
    }, {});
    return result;
}

function groupByarea(array) {
    var result = [];
    array.reduce(function (res, value) {
        if (!res[value['area']]) {
            res[value['area']] = { x: value['area'], y: 0 };
            result.push(res[value['area']]);
        }
        res[value['area']].y += value.count;
        return res;
    }, {});
    return result;
}

function customergroupByarea(array) {
    var result = [];
    array.reduce(function (res, value) {
        if (!res[value['area']]) {
            res[value['area']] = { x: value['area'], y: 0 };
            result.push(res[value['area']]);
        }
        res[value['area']].y += 1;
        return res;
    }, {});
    return result;
}





foodbyrate = { foodname: groupByCategory(food).map(a => a.x), rate: groupByCategory(food).map(a => a.y) };

var foodGroupedBycount = { foodname: groupBycount(food).map(a => a.x), count: groupBycount(food).map(a => a.y) };

var custumerbyfoodcount={Custumername: groupByfoodordercount(food).map(a => a.x), Foodordercount: groupByfoodordercount(food).map(a => a.y)}


var foodbyarea={areaname: groupByarea(food).map(a => a.x), Foodordercount: groupByarea(food).map(a => a.y)};


var custumerbylocation={locationname: customergroupByarea(food).map(a => a.x), custumercount: customergroupByarea(food).map(a => a.y)};




