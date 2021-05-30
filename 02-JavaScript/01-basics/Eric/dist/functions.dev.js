"use strict";

// 1) write a function that takes your name, and returns "hello <name>";
// 2) write it in the three forms of functions
// 3) write n! function (https://www.britannica.com/science/factorial);
// 1 and 2
//annonymous function
var Name = 'Eric';

var sentence = function sentence(name) {
  return 'Hello ' + name;
};

console.log(sentence(Name)); //common function

var names = 'Ericc';

function sentences(names) {
  return 'Hello ' + names;
}

console.log(sentences(names)); //arrow function

var namees = 'Erickobrinsky';

var othername = function othername(name1) {
  return 'Hello ' + name1;
};

console.log(othername(namees)); //3

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

var n = 7;
console.log(factorial(n));