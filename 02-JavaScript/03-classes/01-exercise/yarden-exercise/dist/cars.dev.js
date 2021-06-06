"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function Car(carID, brand, model, price, amount) {
  _classCallCheck(this, Car);

  try {
    if (_typeof(carID) !== "object") throw new Error('not an object');
    this.carID = carID;
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.amount.amount;
    this.agency = document.querySelector('#agency');
    this.createCar();
    this.totalCarPrice();
    this.carInfo();
  } catch (e) {
    console.error(e);
  }
};

createCar();
{
  try {
    (void 0).car = document.createElement('img');
    (void 0).agency.appendChild((void 0).car);
  } catch (error) {
    console.error(e);
  }
}
totalCarPrice();
{
  try {
    console.log(toyotaCorolla['price'] + suzukiJimmy['price'] + skodaOctavia['price']);
  } catch (error) {
    console.error(e);
  }
}
var toyotaCorolla = new Car('#toyotaCorolla', 'Toyota', 'Corolla', '140,000', '16');
var suzukiJimmy = new Car('#suzukiJimmy', 'Suzuki', 'Jimmy', '220,000', '6');
var skodaOctavia = new Car('#skodaOctavia', 'Skoda', 'Octavia', '120,000', '22');