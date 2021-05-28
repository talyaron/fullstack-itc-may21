"use strict";

function theHighest(array) {
  try {
    if (!Array.isArray(array)) {
      throw new Error('Please enter an array!');
    } else {
      notNumbersCounter = 0;

      for (var i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
          notNumbersCounter++;
        }
      }

      if (notNumbersCounter == array.length) {
        throw new Error('Your array contains no numbers!');
      }
    }

    var highest = 0;

    for (var _i = 1; _i < array.length; _i++) {
      if (isNaN(array[_i])) {
        _i++;
      } else {
        if (array[_i] > highest) {
          highest = array[_i];
        }
      }
    }

    return 'The highest number in the array is: ' + highest + '!';
  } catch (error) {
    return error;
  }
}

var arrayToCheck = [8, -1, 4, 200, 'a'];
console.log(theHighest(arrayToCheck));
arrayToCheck = -1;
console.log(theHighest(arrayToCheck));
arrayToCheck = ['Hello', 'Leo', 'Yaniv'];
console.log(theHighest(arrayToCheck));
arrayToCheck = [-1, -1, -1, -1, -1];
console.log(theHighest(arrayToCheck));