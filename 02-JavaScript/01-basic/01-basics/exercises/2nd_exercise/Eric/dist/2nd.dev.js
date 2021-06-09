"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//1) create a function for finding the Median in an array. (https://www.mathsisfun.com/median.html)
//2) create a function that take an object and return an array with the values of the object in an array.
//generate them in the three ways (simple, anonymous, arrow)
//1-1st method
var arr = [1, 1, 2, 2,, 14, 13, 14, 190, 22, 222, 222, 222, 222, 222, 222, 222, 222, 22, 9, 5, 6, 1, 3, 8, 7];
var arrSort = arr.sort(function (a, b) {
  return a - b; //sort an array, this function help to fixe a ASCII code, else some arrays could not sorted
});
var middle = Math.ceil(arr.length / 2); //returns the closest greater or equal integer to a given number.

console.log(arrSort);

function median(arrSort) {
  //% return residual of the division
  if (arr.length % 2 == 0) {
    return (arrSort[middle] + arrSort[middle - 1]) / 2; //take extremes middle numbers and do an average because is inpar
  } else {
    return arrSort[middle - 1]; //par array
  }
}

console.log("median: ", median(arrSort)); //determines if the passed value is an Array.
//1-2nd method

var secondmedian = function secondmedian(arrSort) {
  if (arr.length % 2 == 0) {
    return (arrSort[middle] + arrSort[middle - 1]) / 2;
  } else {
    return arrSort[middle - 1];
  }
};

console.log("median: ", secondmedian(arrSort)); //1-3th method

var thirdmedian = function thirdmedian(arrSort) {
  if (arr.length % 2 == 0) {
    return (arrSort[middle] + arrSort[middle - 1]) / 2;
  } else {
    return arrSort[middle - 1];
  }
};

console.log("median: ", thirdmedian(arrSort)); //2-1st method
//2) create a function that take an object and return an array with the values of the object in an array.

var object = {
  a: 'Eric',
  b: 42,
  c: false
};

function values(object) {
  try {
    if (_typeof(object) !== "object") throw new Error('the argument is not an object');
    if (Array.isArray(object)) throw new Error('the argument is an array and not an object');
    var arraynew = [1, 2, 3];

    var _values = Object.values(object); //object.values() returns an array with the values corresponding to the enumerable properties of an object


    return [].concat(arraynew, _toConsumableArray(_values)); //
  } catch (error) {
    console.log(error);
    return 0;
  }
}

console.log(values(object)); //console.dir(document)
//alert(() =>{
//  arguments: (arrSort);
//length: 0;
//name: "alert";
// });