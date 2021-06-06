"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Car =
/*#__PURE__*/
function () {
  function Car(brand, model, price, amountOfCars) {
    _classCallCheck(this, Car);

    try {
      if (typeof brand !== 'string') throw new Error('Brand should be a string!');
      if (typeof model !== 'string') throw new Error('Model should be a string!');
      if (!Number.isInteger(price)) throw new Error('Price should be an integer!');
      if (!Number.isInteger(amountOfCars)) throw new Error('Amount of cars should be an integer!');
      this.brand = brand;
      this.model = model;
      this.price = price;
      this.amountOfCars = amountOfCars;
      this.totalPrice();
      this.brandNModel();
    } catch (e) {
      console.error(e);
    }
  }

  _createClass(Car, [{
    key: "totalPrice",
    value: function totalPrice() {
      var result = this.price * this.amountOfCars;
      return "The total price of ".concat(this.amountOfCars, " ").concat(this.brand, " ").concat(this.model, "'s is: ").concat(result);
    }
  }, {
    key: "brandNModel",
    value: function brandNModel() {
      console.log("Brand: ".concat(this.brand, "; Model: ").concat(this.model));
    }
  }]);

  return Car;
}();

var car1 = new Car('Toyota', 'Yaris', 80000, 4);
console.log(car1);
console.log(car1.totalPrice());
var car2 = new Car('Kia', 'Ceed', 60000, 10);
console.log(car2);
console.log(car2.totalPrice());
var car3 = new Car('Audi', 'TT', 190000, 2);
console.log(car3);
console.log(car3.totalPrice());
var car4 = new Car(['Audi'], 'TT', 190000, 2);
var car5 = new Car('Audi', 300, 190000, 2);
var car6 = new Car('Audi', 'TT', {
  price: 190000
}, 2);
var car7 = new Car('Audi', 'TT', 190000, '2');
var car8 = new Car('Audi', 'TT', 190000, -22);