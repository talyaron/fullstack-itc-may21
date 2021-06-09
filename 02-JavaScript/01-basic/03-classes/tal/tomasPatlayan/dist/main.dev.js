"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PersonAdress = function PersonAdress(name, lastName, state, city, street, homeNumber) {
  _classCallCheck(this, PersonAdress);

  this.name = name;
  this.lastName = lastName;
  this.state = state;
  this.city = city;
  this.street = street;
  this.homeNumber = homeNumber;
};

var pepe = new PersonAdress('Pepe', 'Peperoni', 'PeperoniLand', 'City of Peps', 'Pepins', 22001);
console.dir(pepe);