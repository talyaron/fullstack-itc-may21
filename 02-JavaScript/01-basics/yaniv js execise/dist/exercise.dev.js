"use strict";

// 1) write a function that takes your name, and returns "hello <name>";
// 2) write it in the three forms of functions
// 3) write n! function (https://www.britannica.com/science/factorial);
// 1) + 2)
function sayHello(name) {
  return 'Hello ' + name + '! This is a classic function';
}

var myName1 = 'Yaniv'; //YS: If you want to use the same variable, use let instead of const. 
// let myName = 'Yaniv';
// myName = 'Yonatan';
// myName = 'Mike'; 

console.log(sayHello(myName1));

var sayHey = function sayHey(name) {
  //YS: Use const instead of let for functions. 
  return 'Hello ' + name + '! This is an anonymous function'; //YS: Try to use template literals instead of string concatenation: `Hello ${name} This is an anonymous function'
};

var myName2 = 'Yanivvv';
console.log(sayHey(myName2));

var greet = function greet(firstName) {
  return 'Hello ' + firstName + '! This is an arrow function';
};

var myName3 = 'Yaniiiiiv';
console.log(greet(myName3)); // 3)

function factorial(num) {
  try {
    if (isNaN(num)) {
      throw new Error('Please enter a number!');
    } else if (num < 0) {
      throw new Error('Please enter a positive, whole number!');
    }

    var result = 1;

    for (var i = 2; i <= num; i++) {
      console.log('Step ' + (i - 1) + ': ' + result + ' x ' + i + ' = ' + result * i);
      result *= i;
    }

    return 'Final result: The factorial of ' + num + ' is ' + result + '!';
  } catch (error) {
    return error;
  }
}

var toFactorial = 8;
console.log(factorial(toFactorial));
toFactorial = -1;
console.log(factorial(toFactorial));
toFactorial = 'Hello';
console.log(factorial(toFactorial));