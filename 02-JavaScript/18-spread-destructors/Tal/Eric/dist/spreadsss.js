var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var arr11 = [1, 2, 3, 4, 55];
//spread inside
var arr22 = __spreadArrays(arr11, [5]);
console.log(arr22);
arr11[0] = 1000;
console.log(arr22);
var arr33 = arr11;
console.log(arr33);
arr11[0] = 1111;
console.log(arr33);
