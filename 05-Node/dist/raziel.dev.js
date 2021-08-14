"use strict";

var argv = require('argv');

var args = argv.option({
  name: 'option',
  "short": 'o',
  type: 'string',
  description: 'Defines an option for your script',
  example: "'script --opiton=value' or 'script -o value'"
}).run();
console.log(args);
console.log("hello");

function x(a, b) {
  return a * b;
}

;
console.log(x(10, 10));