"use strict";

var x = 4;
var y = 7;
console.log(x);
x = 'hello';
console.log(x);
x = [1, 5, 'ff', '23', y]; //array

console.log(x);
console.log(x[2]);
x = {
  a: 1,
  b: 2,
  c: y
};
console.log(x);
var position = 'b';
console.log(x.c);
console.log(x[position]);