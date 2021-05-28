"use strict";

var highestArray = ["pepe", 12, 100, 2]; //First Method

function numberHighest(array2) {
  try {
    for (var i = 0; i < array2.length; i++) {
      if (typeof array2[i] !== "number") {
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
    for (var i = 0; i < array2.length; i++) {
      if (typeof array2[i] !== "number") {
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
    for (var i = 0; i < array2.length; i++) {
      if (typeof array2[i] !== "number") {
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