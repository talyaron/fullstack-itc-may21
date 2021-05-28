"use strict";

// 1) create a function for finding the median in an array. (https://www.mathsisfun.com/median.html)
// 2) create a function that take an object and return an array with the values of the object in an array.
// generate them in the three ways (simple, anonymous, arrow)
// 1)
function orderArr(array) {
  try {
    // debugger;
    var tempElmntValue;

    for (j = 0; j < array.length; j++) {
      for (var i = 0; i < array.length - j; i++) {
        if (array[i] > array[array.length - j]) {
          tempElmntValue = array[array.length - j];
          array[array.length - j] = array[i];
          array[i] = tempElmntValue;
        }
      }
    }

    return array;
  } catch (error) {
    return error;
  }
}

function findMedSimple(array) {
  try {
    // debugger;
    if (!Array.isArray(array)) {
      throw new Error('Please enter an array!');
    }

    if (array.length == 1) {
      throw new Error('Your array only has one element...');
    }

    var firstNum = null;
    var i = 0;

    while (i < array.length && typeof array[i] == 'number') {
      i++;
    }

    if (i != array.length) {
      throw new Error('Your array has elements which are not numbers!');
    }

    var orderedArr = orderArr(array);
    var median;

    if (Number.isInteger(orderedArr.length / 2)) {
      median = (orderedArr[orderedArr.length / 2 - 1] + orderedArr[orderedArr.length / 2]) / 2;
    } else {
      median = orderedArr[orderedArr.length / 2 - 0.5];
    }

    return median;
  } catch (error) {
    return error;
  }
}

var findMedAnonymous = function findMedAnonymous(array) {
  try {
    // debugger;
    if (!Array.isArray(array)) {
      throw new Error('Please enter an array!');
    }

    if (array.length == 1) {
      throw new Error('Your array only has one element...');
    }

    var firstNum = null;
    var i = 0;

    while (i < array.length && typeof array[i] == 'number') {
      i++;
    }

    if (i != array.length) {
      throw new Error('Your array has elements which are not numbers!');
    }

    var orderedArr = orderArr(array);
    var median;

    if (Number.isInteger(orderedArr.length / 2)) {
      median = (orderedArr[orderedArr.length / 2 - 1] + orderedArr[orderedArr.length / 2]) / 2;
    } else {
      median = orderedArr[orderedArr.length / 2 - 0.5];
    }

    return median;
  } catch (error) {
    return error;
  }
};

var findMedArrow = function findMedArrow(array) {
  try {
    // debugger;
    if (!Array.isArray(array)) {
      throw new Error('Please enter an array!');
    }

    if (array.length == 1) {
      throw new Error('Your array only has one element...');
    }

    var firstNum = null;
    var i = 0;

    while (i < array.length && typeof array[i] == 'number') {
      i++;
    }

    if (i != array.length) {
      throw new Error('Your array has elements which are not numbers!');
    }

    var orderedArr = orderArr(array);
    var median;

    if (Number.isInteger(orderedArr.length / 2)) {
      median = (orderedArr[orderedArr.length / 2 - 1] + orderedArr[orderedArr.length / 2]) / 2;
    } else {
      median = orderedArr[orderedArr.length / 2 - 0.5];
    }

    return median;
  } catch (error) {
    return error;
  }
};

var arrayToCheck = [6, 5, 4, 1, 2, 58];
console.log('simple: ' + findMedSimple(arrayToCheck));
console.log('anonymous: ' + findMedAnonymous(arrayToCheck));
console.log('arrow: ' + findMedArrow(arrayToCheck));
arrayToCheck = [6, 5, 'a', 1, 2, 58];
console.log('simple: ' + findMedSimple(arrayToCheck));
console.log('anonymous: ' + findMedAnonymous(arrayToCheck));
console.log('arrow: ' + findMedArrow(arrayToCheck));
arrayToCheck = [6];
console.log('simple: ' + findMedSimple(arrayToCheck));
console.log('anonymous: ' + findMedAnonymous(arrayToCheck));
console.log('arrow: ' + findMedArrow(arrayToCheck));
arrayToCheck = 23;
console.log('simple: ' + findMedSimple(arrayToCheck));
console.log('anonymous: ' + findMedAnonymous(arrayToCheck));
console.log('arrow: ' + findMedArrow(arrayToCheck));