//primitives are copied by value
//primitives: string, number, undefined, boolean;
// by value: we copy only the value
//objects are copied by reference
// objects are: object, array, function
// by refernce: means that the varibles pointing to the same location in memory
var x = { a: 1 };
var y = x;
console.log(y.a);
x.a = 100;
console.log(y.a);
var arr1 = [1, 2, 3];
var arr2 = arr1;
console.log(arr2[0]);
arr1[0] = 1000;
console.log(arr1[0]);
arr1 = [23, 45];
console.log(arr2[0]);
//let a:any='23'
//let b=a
//a=44
//console.log(b)
var a = [1, 2, 3, 5, 6];
var b = a;
console.log(b[2]);
b[2] = 4;
console.log(a[2]);
