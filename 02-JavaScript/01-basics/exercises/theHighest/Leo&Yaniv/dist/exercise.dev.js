"use strict";

// classic
function theHighest(array) {
  try {
    if (!Array.isArray(array)) {
      throw new Error('Please enter an array!');
    } else {
      notNumbersCounter = 0;
      isAllEqual = false;

      for (var i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
          notNumbersCounter++;
        }

        if (i > 1 && array[i] == array[i - 1]) {
          isAllEqual = true;
        } else {
          isAllEqual = false;
        }
      }

      if (notNumbersCounter == array.length) {
        throw new Error('Your array contains no numbers!');
      }

      if (isAllEqual == true) {
        throw new Error('Your array elements are all equal!');
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
} // anonymous


var highestNum = function highestNum(array) {
  try {
    if (!Array.isArray(array)) {
      throw new Error('Please enter an array!');
    } else {
      notNumbersCounter = 0;
      isAllEqual = false;

      for (var i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
          notNumbersCounter++;
        }

        if (i > 1 && array[i] == array[i - 1]) {
          isAllEqual = true;
        } else {
          isAllEqual = false;
        }
      }

      if (notNumbersCounter == array.length) {
        throw new Error('Your array contains no numbers!');
      }

      if (isAllEqual == true) {
        throw new Error('Your array elements are all equal!');
      }
    }

    var highest = 0;

    for (var _i2 = 1; _i2 < array.length; _i2++) {
      if (isNaN(array[_i2])) {
        _i2++;
      } else {
        if (array[_i2] > highest) {
          highest = array[_i2];
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
      isAllEqual = false;

      for (var i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
          notNumbersCounter++;
        }

        if (i > 1 && array[i] == array[i - 1]) {
          isAllEqual = true;
        } else {
          isAllEqual = false;
        }
      }

      if (notNumbersCounter == array.length) {
        throw new Error('Your array contains no numbers!');
      }

      if (isAllEqual == true) {
        throw new Error('Your array elements are all equal!');
      }
    }

    var highest = 0;

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