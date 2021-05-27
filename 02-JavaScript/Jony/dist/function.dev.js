"use strict";

// Point 1
var name = "Jonathan";

function firstMethod(name) {
  return "My name is " + name;
}

console.log(firstMethod(name)); //Point 2. First method above.

var secondMethod = function secondMethod(name) {
  return "My name is " + name;
};

x = secondMethod(name);
console.log(x); //

var thirdMethod = function thirdMethod(name) {
  return "My name is " + name;
};

x = thirdMethod(name);
console.log(x); // Point 3 -- three method's

var number = 3;

function Factorial(number) {
  var result = 1;

  for (var i = 1; i < number; i++) {
    result *= i + 1;
  }

  return result;
}

console.log(Factorial(number));

function Factorial2(number) {
  var r = number;

  if (number === 0) {
    return 1;
  }

  for (var i = 1; i < number; i++) {
    r *= number - i;
  }

  return r;
}

console.log(Factorial2(number));

function Factorial3(number) {
  if (number === 0) {
    return 1;
  }

  return number * Factorial3(number - 1);
}

console.log(Factorial3(number));