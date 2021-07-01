//primitives are copied by value
//primitives: string, number, undefined, boolean;
// by value: that we copy only the value
//objects are copied by reference
// objects are: object, array, function
// by refernce: means it is the same object, and we point to specific place in memory
var x = { a: 1 };
var y = x;
console.log(y.a); // 1
x.a = 100;
console.log(y.a); //100
var arr1 = [1, 2, 3];
var arr2 = arr1;
console.log(arr2[0]); // 1
arr1[0] = 1000;
console.log(arr2[0]); // 1000
arr1 = [23, 45]; //it initiate "garbage collector"
console.log(arr2[0]);
var a = '23';
var b = a;
a = 44;
console.log(b);
