"use strict";

// classic
function theHighest(array) {
  try {
    if (!Array.isArray(array)) {
      throw new Error('Please enter an array!');
    } else if (array.length == 1) {
      throw new Error('Your array only has one element...');
    }

    var firstNum = null;
    var i = 0;

    while (i < array.length && typeof array[i] != 'number') {
      i++;
    }

    if (i == array.length) {
      throw new Error('Your array contains no numbers!');
    }

    firstNum = array[i];
    var j;

    if (i == 0) {
      j = 1;
    } else {
      j = i;
    }

    while (j < array.length && array[j] == array[j - 1]) {
      j++;
    }

    if (j == array.length) {
      throw new Error('Your array elements are all equal!');
    }

    var highest = firstNum;

    for (var k = i; k < array.length; k++) {
      if (isNaN(array[k])) {
        k++;
      } else {
        if (array[k] > highest) {
          highest = array[k];
        }
      }
    }

    return 'The highest number in the array is: ' + highest + '!';
  } catch (error) {
    return error;
  }
} // anonymous


var highestNum = function highestNum(array) {
  try {
    if (!Array.isArray(array)) {
      throw new Error('Please enter an array!');
    } else if (array.length == 1) {
      throw new Error('Your array only has one element...');
    }

    var firstNum = null;
    var i = 0;

    while (i < array.length && typeof array[i] != 'number') {
      i++;
    }

    if (i == array.length) {
      throw new Error('Your array contains no numbers!');
    }

    firstNum = array[i];
    var j;

    if (i == 0) {
      j = 1;
    } else {
      j = i;
    }

    while (j < array.length && array[j] == array[j - 1]) {
      j++;
    }

    if (j == array.length) {
      throw new Error('Your array elements are all equal!');
    }

    var highest = firstNum;

    for (var k = i; k < array.length; k++) {
      if (isNaN(array[k])) {
        k++;
      } else {
        if (array[k] > highest) {
          highest = array[k];
        }
      }
    }

    return 'The highest number in the array is: ' + highest + '!';
  } catch (error) {
    return error;
  }
}; // arrow


var highestInArrow = function highestInArrow(array) {
  try {
    if (!Array.isArray(array)) {
      throw new Error('Please enter an array!');
    } else if (array.length == 1) {
      throw new Error('Your array only has one element...');
    }

    var firstNum = null;
    var i = 0;

    while (i < array.length && typeof array[i] != 'number') {
      i++;
    }

    if (i == array.length) {
      throw new Error('Your array contains no numbers!');
    }

    firstNum = array[i];
    var j;

    if (i == 0) {
      j = 1;
    } else {
      j = i;
    }

    while (j < array.length && array[j] == array[j - 1]) {
      j++;
    }

    if (j == array.length) {
      throw new Error('Your array elements are all equal!');
    }

    var highest = firstNum;

    for (var k = i; k < array.length; k++) {
      if (isNaN(array[k])) {
        k++;
      } else {
        if (array[k] > highest) {
          highest = array[k];
        }
      }
    }

    return 'The highest number in the array is: ' + highest + '!';
  } catch (error) {
    return error;
  }
};

var arrayToCheck = [8, -1, 4, 200, 'a'];
console.log('classic: ' + theHighest(arrayToCheck));
console.log('anonymous: ' + highestNum(arrayToCheck));
console.log('arrow: ' + highestInArrow(arrayToCheck));
arrayToCheck = -1;
console.log('classic: ' + theHighest(arrayToCheck));
console.log('anonymous: ' + highestNum(arrayToCheck));
console.log('arrow: ' + highestInArrow(arrayToCheck));
arrayToCheck = 'This is a string';
console.log('classic: ' + theHighest(arrayToCheck));
console.log('anonymous: ' + highestNum(arrayToCheck));
console.log('arrow: ' + highestInArrow(arrayToCheck));
arrayToCheck = {
  string: 'This is a string',
  arr: [1, 2, 3],
  "boolean": false
};
console.log('classic: ' + theHighest(arrayToCheck));
console.log('anonymous: ' + highestNum(arrayToCheck));
console.log('arrow: ' + highestInArrow(arrayToCheck));
arrayToCheck = ['Hello', 'Leo', 'Yaniv'];
console.log('classic: ' + theHighest(arrayToCheck));
console.log('anonymous: ' + highestNum(arrayToCheck));
console.log('arrow: ' + highestInArrow(arrayToCheck));
arrayToCheck = [-1, -1, -1, -1, -1];
console.log('classic: ' + theHighest(arrayToCheck));
console.log('anonymous: ' + highestNum(arrayToCheck));
console.log('arrow: ' + highestInArrow(arrayToCheck));