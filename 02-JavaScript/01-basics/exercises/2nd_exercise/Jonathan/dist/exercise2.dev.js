"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//1) create a function for finding the median in an array. (https://www.mathsisfun.com/median.html)
var arr = [1, 2, 3]; //order the list first

var sortedArr = arr.sort(function (a, b) {
  return a - b;
}); //function getMedium

var getMedian = function getMedian(arr) {
  try {
    //if(!Array.isArray(arr)) throw new Error('the argument is not an array')
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

median = getMedian(sortedArr);
console.log("The median of the array is ".concat(median)); //2) create a function that take an object and return an array with the values of the object in an array.

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

var valuesArray = function valuesArray(obj) {
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

x = valuesArray(obj);
console.log(x);
/*

let z = (obj) =>{
    return Object.values(obj)
}

y = z(obj)
console.log(y)

*/