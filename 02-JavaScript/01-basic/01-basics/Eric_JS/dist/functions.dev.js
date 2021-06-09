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

console.log(result); //1) create a function with error handeling, for: get an array, and return the heighst number. make sure you handle all errors
//2) create the function in the three ways (simple, anonymous, arrow);

var highestArray = ["pepe", 12, 100, 2]; //First Method

function numberHighest(array2) {
  try {
    for (var _i = 0; _i < array2.length; _i++) {
      if (typeof array2[_i] !== "number") {
        throw new Error("Some elements is not a number");
      }
    }

    return Math.max.apply(null, array2);
  } catch (error) {
    console.log(error);
    return 0;
  }
}

console.log(numberHighest(highestArray)); //Second Method

var secondMethod = function secondMethod(array2) {
  try {
    for (var _i2 = 0; _i2 < array2.length; _i2++) {
      if (typeof array2[_i2] !== "number") {
        throw new Error("Some elements is not a number");
      }
    }

    return Math.max.apply(null, array2);
  } catch (error) {
    console.log(error);
    return 0;
  }
};

x = secondMethod(highestArray);
console.log(x); //Third Method

var thirdMethod = function thirdMethod(array2) {
  try {
    for (var _i3 = 0; _i3 < array2.length; _i3++) {
      if (typeof array2[_i3] !== "number") {
        throw new Error("Some elements is not a number");
      }
    }

    return Math.max.apply(null, array2);
  } catch (error) {
    console.log(error);
    return 0;
  }
};

y = thirdMethod(highestArray);
console.log(y);