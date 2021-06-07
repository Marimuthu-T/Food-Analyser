
function groupByfoodordercount(array) {
    var result = [];
    array.reduce(function (res, value) {
        if (!res[value['custumerName']]) {
            res[value['custumerName']] = { x: value['custumerName'], y: 0 };
            result.push(res[value['custumerName']]);
        }
        res[value['custumerName']].y += value.foodOrderCount;
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


function customergroupByrevenue(array) {
    var result = [];
    array.reduce(function (res, value) {
        if (!res[value['custumername']]) {
            res[value['custumername']] = { x: value['custumername'], y: 0 };
            result.push(res[value['custumername']]);
        }
        res[value['custumername']].y = value.rate;
        return res;
    }, {});
    return result;
}



function foodcountgroupByarea(array) {
    var result = [];
    array.reduce(function (res, value) {
        if (!res[value['locationName']]) {
            res[value['locationName']] = { x: value['locationName'], y: 0 };
            result.push(res[value['locationName']]);
        }
        res[value['locationName']].y = value.foodSoldCount;
        return res;
    },{});
    return result;
}



var custumerbyfoodcount={Custumername: groupByfoodordercount(custumerbyfoodcountdata).map(a => a.x), Foodordercount: groupByfoodordercount(custumerbyfoodcountdata).map(a => a.y)}



var custumerbylocation={locationname: customergroupByarea(food).map(a => a.x), custumercount: customergroupByarea(food).map(a => a.y)};

var custumerbyRevenue={Custumername: customergroupByrevenue(food).map(a => a.x), revenue: customergroupByrevenue(food).map(a => a.y)};




var ordercountbylocation={LocationName : foodcountgroupByarea(custumerbylocationdata).map(a => a.x), Foodordercount :foodcountgroupByarea(custumerbylocationdata).map(a => a.y) };
