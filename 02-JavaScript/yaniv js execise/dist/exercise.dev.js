"use strict";

// 1) write a function that takes your name, and returns "hello <name>";
// 2) write it in the three forms of functions
// 3) write n! function (https://www.britannica.com/science/factorial);
// 1) + 2)
function sayHello(name) {
  return 'hello ' + name + '!';
}

var myName1 = 'Yaniv';
console.log(sayHello(myName1));

var sayHey = function sayHey(name) {
  return 'hello ' + name + '!';
};

var myName2 = 'Yanivvv';
console.log(sayHey(myName2));

var greet = function greet(firstName) {
  return 'hello ' + firstName;
};

var myName3 = 'Yaniiiiiv';
console.log(greet(myName3)); // 3)

function factorial(num) {
  var result = 1;

  for (var i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

var toFactorial = 8;
console.log('the factorial of ' + toFactorial + ' is ' + factorial(toFactorial) + '!');