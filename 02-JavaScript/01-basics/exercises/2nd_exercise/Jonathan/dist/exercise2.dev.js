"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//1) create a function for finding the median in an array. (https://www.mathsisfun.com/median.html)
var arr = [4, 3, 2, 1, 5]; //order the list first

try {
  if (!Array.isArray(arr)) throw new Error('the argument is not an array');
  var sortedArr = arr.sort(function (a, b) {
    return a - b;
  }); //function getMedium // ArrowMethod

  var getMedianbyFirst = function getMedianbyFirst(arr) {
    try {
      var sumi = 0; //odd situation

      if (arr.length % 2 !== 0) {
        for (var i = 0; i < arr.length; i++) {
          if (typeof arr[i] !== 'number') throw new Error('an element is not a number');
          sumi += i;
        }

        var count = arr.length;
        var medium = arr[sumi / count];
        return medium;
      } else {
        //even situation  
        for (var _i = 0; _i < arr.length; _i++) {
          if (typeof arr[_i] !== 'number') throw new Error('an element is not a number');
          sumi += _i;
        }

        var _count = arr.length;

        var _medium = (arr[Math.round(sumi / _count) - 1] + arr[Math.round(sumi / _count)]) / 2;

        return _medium;
      }
    } catch (error) {
      console.log(error);
      return 0;
    }
  };

  median = getMedianbyFirst(sortedArr);
  console.log("The median is ".concat(median));
} catch (error) {
  console.log(error);
} //Anonymous Method


try {
  if (!Array.isArray(arr)) throw new Error('the argument is not an array');

  var _sortedArr = arr.sort(function (a, b) {
    return a - b;
  }); //function getMedium // ArrowMethod


  var getMedianbySecond = function getMedianbySecond(arr) {
    try {
      var sumi = 0; //odd situation

      if (arr.length % 2 !== 0) {
        for (var i = 0; i < arr.length; i++) {
          if (typeof arr[i] !== 'number') throw new Error('an element is not a number');
          sumi += i;
        }

        var count = arr.length;
        var medium = arr[sumi / count];
        return medium;
      } else {
        //even situation  
        for (var _i2 = 0; _i2 < arr.length; _i2++) {
          if (typeof arr[_i2] !== 'number') throw new Error('an element is not a number');
          sumi += _i2;
        }

        var _count2 = arr.length;

        var _medium2 = (arr[Math.round(sumi / _count2) - 1] + arr[Math.round(sumi / _count2)]) / 2;

        return _medium2;
      }
    } catch (error) {
      console.log(error);
      return 0;
    }
  };

  median = getMedianbySecond(_sortedArr);
  console.log("The median is ".concat(median));
} catch (error) {
  console.log(error);
} // Simple Method


try {
  //function getMedium // ArrowMethod
  var getMedianbyThird = function getMedianbyThird(arr) {
    try {
      var sumi = 0; //odd situation

      if (arr.length % 2 !== 0) {
        for (var i = 0; i < arr.length; i++) {
          if (typeof arr[i] !== 'number') throw new Error('an element is not a number');
          sumi += i;
        }

        var count = arr.length;
        var medium = arr[sumi / count];
        return medium;
      } else {
        //even situation  
        for (var _i3 = 0; _i3 < arr.length; _i3++) {
          if (typeof arr[_i3] !== 'number') throw new Error('an element is not a number');
          sumi += _i3;
        }

        var _count3 = arr.length;

        var _medium3 = (arr[Math.round(sumi / _count3) - 1] + arr[Math.round(sumi / _count3)]) / 2;

        return _medium3;
      }
    } catch (error) {
      console.log(error);
      return 0;
    }
  };

  if (!Array.isArray(arr)) throw new Error('the argument is not an array');

  var _sortedArr2 = arr.sort(function (a, b) {
    return a - b;
  });

  console.log("The median is " + getMedianbyThird(_sortedArr2));
} catch (error) {
  console.log(error);
} //2) create a function that take an object and return an array with the values of the object in an array.
//Arrow


var obj = {
  a: {
    a: 1,
    b: 2
  },
  b: [1, 2],
  c: 2,
  d: false,
  e: true,
  f: 'e'
};

var firstArray = function firstArray(obj) {
  try {
    if (_typeof(obj) !== "object") throw new Error('the argument is not an object');
    if (Array.isArray(obj)) throw new Error('the argument is an array and not an object');
    var _arr = [];

    for (var i in obj) {
      _arr.push(obj[i]);
    }

    return _arr;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

x = firstArray(obj);
console.log(x); //Anonymous

var secondArray = function secondArray(obj) {
  try {
    if (_typeof(obj) !== "object") throw new Error('the argument is not an object');
    if (Array.isArray(obj)) throw new Error('the argument is an array and not an object');
    var _arr2 = [];

    for (var i in obj) {
      _arr2.push(obj[i]);
    }

    return _arr2;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

x = secondArray(obj);
console.log(x); //Simple

function thirdArray(obj) {
  try {
    if (_typeof(obj) !== "object") throw new Error('the argument is not an object');
    if (Array.isArray(obj)) throw new Error('the argument is an array and not an object');
    var _arr3 = [];

    for (var i in obj) {
      _arr3.push(obj[i]);
    }

    return _arr3;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

x = thirdArray(obj);
console.log(x);
/*

let z = (obj) =>{
    return Object.values(obj)
}

y = z(obj)
console.log(y)

*/