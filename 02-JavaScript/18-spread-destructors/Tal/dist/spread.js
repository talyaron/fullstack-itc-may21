var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var arr1 = [1, 2, 3, 4, 77];
var arr2 = __spreadArrays([100], arr1, [5]);
console.log(arr2);
arr1[0] = 2000;
console.log(arr2);
var arr3 = arr1;
console.log(arr3);
arr1[0] = 345;
console.log(arr3); // arr3[0] -> 2000
var x = 345;
var y = x; //345
console.log(y); //345
x = 12;
console.log(y); //12
