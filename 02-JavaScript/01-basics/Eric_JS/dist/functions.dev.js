"use strict";

//1
function Hello(name) {
  return 'hello ' + name;
}

var Name = 'Eric';
console.log(Hello(Name));

var hi = function hi(name) {
  return 'hello ' + name;
};

var othername = 'Ericc';
console.log(hi(othername));

var xx = function xx(firstName) {
  return 'hello ' + firstName;
};

var othernames = 'Ericcc';
console.log(xx(othernames)); //3

var x = 7;
var result = x;

for (var i = x - 1; i >= 1; i--) {
  result = result * i;
}