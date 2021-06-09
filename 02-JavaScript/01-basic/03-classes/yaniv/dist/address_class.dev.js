"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// create a class for a person and add her address (state, city, street, homeNumber)
// create a class that says the person's full address
var Address =
/*#__PURE__*/
function () {
  function Address(state, city, street, homeNumber) {
    _classCallCheck(this, Address);

    try {
      if (typeof state !== 'string') {
        throw new Error('state is not a string');
      }

      if (typeof city !== 'string') {
        throw new Error('city is not a string');
      }

      if (typeof street !== 'string') {
        throw new Error('street is not a string');
      }

      if (typeof homeNumber !== 'number') {
        throw new Error('state is not a number');
      }

      this.state = state;
      this.city = city;
      this.street = street;
      this.homeNumber = homeNumber;
    } catch (er) {
      return er;
    }
  }

  _createClass(Address, [{
    key: "sayAddress",
    value: function sayAddress() {
      return "Your address is ".concat(this.homeNumber, " ").concat(this.street, " st. ").concat(this.city, ", ").concat(this.state);
    }
  }]);

  return Address;
}();

adrs1 = new Address('Israel', 'Beer Sheva', 'Shimshon Amitsur', 15);
console.log(adrs1.sayAddress());