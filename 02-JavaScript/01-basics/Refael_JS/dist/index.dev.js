"use strict";

// Simple function
function Name1() {
  var arg1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var arg2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var arg3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return arg1 + arg2 + arg3;
}

var x = Name1("Hello", " , ", "Refael!");
console.log(x); // anonymous function

var Name2 = function Name2(arg1, arg2, arg3) {
  return arg1 + arg2 + arg3;
};

var Y = Name2("Hello", " , ", "Refael!");
console.log(Y); // arrow function

var Name3 = function Name3(arg1, arg2, arg3) {
  return arg1 + arg2 + arg3;
};

var Z = Name3("Hello", " , ", "Refael!");
console.log(Z); // Factorial function

var factor = function factor(num) {
  if (num === 0 || num === 1) return 1;

  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }

  return num;
};

factor();
console.log(factor(7));