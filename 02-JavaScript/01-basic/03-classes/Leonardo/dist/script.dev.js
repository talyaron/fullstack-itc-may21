"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* create a class for a person and add her address (state, city, street, homeNumber)
create a class that says the person's full address */
var Person =
/*#__PURE__*/
function () {
  function Person(name, state, city, street, homeNumber) {
    _classCallCheck(this, Person);

    this.name = name;
    this.state = state;
    this.city = city;
    this.street = street;
    this.homeNumber = homeNumber;
  }

  _createClass(Person, [{
    key: "sayAddress",
    value: function sayAddress() {
      console.log("The address of ".concat(this.name, " is ").concat(this.street, " ").concat(this.homeNumber, " in ").concat(this.state, "-").concat(this.city, "."));
    }
  }]);

  return Person;
}();

var person01 = new Person("Juan", "Capital", "Mendoza", "Bardas Blancas", 1250);
var person02 = new Person("Pepe", "Godoy Cruz", "Mendoza", "San Martin", 57);
person01.sayAddress();
person02.sayAddress();