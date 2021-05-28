"use strict";

// classic
function theHighest(array) {
  try {
    if (!Array.isArray(array)) {
      throw new Error('Please enter an array!');
    } else {
      notNumbersCounter = 0;

      for (var _i = 0; _i < array.length; _i++) {
        if (isNaN(array[_i])) {
          notNumbersCounter++;
        }
      }

      if (notNumbersCounter == array.length) {
        throw new Error('Your array contains no numbers!');
      } else {
        i = 1;

        while (i < array.length && array[i] == array[i - 1]) {
          i++;
        }

        if (i == array.length) {
          throw new Error('Your array elements are all equal!');
        }
      }
    }

    var firstNum;

    for (var _i2 = 1; _i2 < array.length; _i2++) {
      if (typeof array[_i2] === 'number') {
        firstNum = array[_i2];
        break;
      }
    }

    var highest = firstNum;

    for (var _i3 = 1; _i3 < array.length; _i3++) {
      if (isNaN(array[_i3])) {
        _i3++;
      } else {
        if (array[_i3] > highest) {
          highest = array[_i3];
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
    } else {
      notNumbersCounter = 0;

      for (var _i4 = 0; _i4 < array.length; _i4++) {
        if (isNaN(array[_i4])) {
          notNumbersCounter++;
        }
      }

      if (notNumbersCounter == array.length) {
        throw new Error('Your array contains no numbers!');
      } else {
        i = 1;

        while (i < array.length && array[i] == array[i - 1]) {
          i++;
        }

        if (i == array.length) {
          throw new Error('Your array elements are all equal!');
        }
      }
    }

    var firstNum;

    for (var _i5 = 1; _i5 < array.length; _i5++) {
      if (typeof array[_i5] === 'number') {
        firstNum = array[_i5];
        break;
      }
    }

    var highest = firstNum;

    for (var _i6 = 1; _i6 < array.length; _i6++) {
      if (isNaN(array[_i6])) {
        _i6++;
      } else {
        if (array[_i6] > highest) {
          highest = array[_i6];
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
    } else {
      notNumbersCounter = 0;

      for (var _i7 = 0; _i7 < array.length; _i7++) {
        if (isNaN(array[_i7])) {
          notNumbersCounter++;
        }
      }

      if (notNumbersCounter == array.length) {
        throw new Error('Your array contains no numbers!');
      } else {
        i = 1;

        while (i < array.length && array[i] == array[i - 1]) {
          i++;
        }

        if (i == array.length) {
          throw new Error('Your array elements are all equal!');
        }
      }
    }

    var firstNum;

    for (var _i8 = 1; _i8 < array.length; _i8++) {
      if (typeof array[_i8] === 'number') {
        firstNum = array[_i8];
        break;
      }
    }

    var highest = firstNum;

    for (var _i9 = 1; _i9 < array.length; _i9++) {
      if (isNaN(array[_i9])) {
        _i9++;
      } else {
        if (array[_i9] > highest) {
          highest = array[_i9];
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