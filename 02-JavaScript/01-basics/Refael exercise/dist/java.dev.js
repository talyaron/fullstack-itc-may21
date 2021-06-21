"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// //creating a function, give it a value to pass on,
// //than i creat a veriable and set it to a value by talking the
// //first value and manupukatig it
// //after that im talking that value and returning (i can return an equation with setting it to a veriable)
// //it back so i can do something with it but in order
// //for me to use it i need to put it in a variable
// //so im creating a variable and set it to be equle evoking my function
//function that calculates the radius of a number
var calcRaduis = function calcRaduis(raduis) {
  try {
    if (typeof raduis !== "number") throw new Error("this is not a number");
    return 3.14 * Math.pow(raduis, 2);
  } catch (error) {
    console.log(error);
  }
};

var area = calcRaduis(82);
console.log("your area is:", area); //function that calculates the mean (average)

var mean = function mean(arr) {
  try {
    if (!Array.isArray(arr)) throw new Error("this is not an array");
    var sums = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _i = _step.value;
        if (typeof _i !== "number") throw new Error("the item is not a number");
        sums += _i;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var _avg = sums / arr.length;

    return _avg;
  } catch (error) {
    console.log(error);
  }
};

var avg = mean([1, 2, 3, 4]);
console.log(avg); //objact to array

var objectToArray = function objectToArray(object) {
  try {
    if (_typeof(object) !== "object") throw new Error("this is not an object!");

    for (i in object) {
      console.log(Object.values(object));
      var arrayFromobject = Object.values(object);
      return arrayFromobject;
    }
  } catch (error) {
    console.log(error);
  }
};

var array = objectToArray({
  Refael: "Assor",
  Assor: "Refael",
  status: "good job!"
});
console.log(array); // function averageArray(arr) {
//   //the solution is for loopp that scroll each elelemnt in the array, then get the total. add to the running total
//   try {
//     if (!Array.isArray(arr)) throw new Error("the argument is not an array");
//     //define  a variable which sums the number
//     let runningTotal = 0;
//     for (let el of arr) {
//       if (typeof el !== "number") throw new Error("an element is not a number");
//       //add them up
//       runningTotal += el;
//     }
//     const avg = runningTotal / arr.length;
//     return avg;
//   } catch (e) {
//     console.error(e);
//     return false;
//   }
// }
// let avg = averageArray("a");
// console.log(avg);