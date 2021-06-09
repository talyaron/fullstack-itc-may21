"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// create a class of Car
// in the costructor, set brand, model, price, amountOfCars,
// and there will be two methods.
// 1) return the price of the total cars
// 2) console.log the brand and the model of the car;
// create 3 instance and run the methods, for each of them.
var Car =
/*#__PURE__*/
function () {
  function Car(make, model, price, qntyOH) {
    _classCallCheck(this, Car);

    this.make = make;
    this.model = model;
    this.price = price;
    this.qntyOH = qntyOH;
    this.total();
  }

  _createClass(Car, [{
    key: "total",
    value: function total() {
      try {
        Car.total;
        this.price * this.qntyOH;
      } catch (error) {
        console.error(error);
      }
    }
  }]);

  return Car;
}();

var ford = new Car("ford", "mustang", "$60,000", "13");
var chevy = new Car("chevy", "corvette", "$85,000", "6");
var dodge = new Car("dodge", "viper", "$105,000", "17");
console.log(total(ford));