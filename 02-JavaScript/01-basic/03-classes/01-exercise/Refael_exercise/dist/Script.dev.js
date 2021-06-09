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
var cars =
/*#__PURE__*/
function () {
  function cars(brand, model, price, carsAmount, color) {
    _classCallCheck(this, cars);

    this.brand = brand;
    this.model = model;
    this.price = price;
    this.carsAmount = carsAmount;
    this.color = color;
  }

  _createClass(cars, [{
    key: "totallPrice",
    value: function totallPrice() {
      var price = this.carsAmount * this.price;
      console.log(price);
    }
  }, {
    key: "brandAndmodel",
    value: function brandAndmodel() {
      console.log("".concat(this.brand + this.model + this.color));
    }
  }]);

  return cars;
}();

var first = new cars("mazda", "3", "10", "2", "green");
var second = new cars("bmw", "mini", "40", "3", "yellow");
var third = new cars("suzoki", "swift", "50", "1", "black");
first.totallPrice();
second.totallPrice();
third.totallPrice();
first.brandAndmodel();
second.brandAndmodel();
third.brandAndmodel();