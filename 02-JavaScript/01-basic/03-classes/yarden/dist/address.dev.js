"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Address = function Address(state, city, street, num) {
  _classCallCheck(this, Address);

  try {
    if (typeOf(state) !== 'string') throw new Error('state is not a string');
    if (typeOf(city) !== 'string') throw new Error('city is not a string');
    if (typeOf(street) !== 'string') throw new Error('street is not a string');
    if (typeOf(num) !== 'number') throw new Error('num is not a number');
    this.state = state;
    this.city = city;
    this.street = street;
    this.num = num;
  } catch (error) {
    console.error(error);
  }

  logAddress()("Your address is at ".concat(this.num, "th ").concat(this.street, " street, ").concat(this.city, ", ").concat(this.state, "."));
};

var yardenAddress = new Address('Israel', 'Haifa', 'Kaspi', 14);
Address.logAddress(yardenAddress);