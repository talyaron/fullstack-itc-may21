"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var People = function People(id, name, age, height) {
  _classCallCheck(this, People);

  this.id = id;
  this.name = name;
  this.age = age;
  this.height = height;
};

var person01 = new People('#p1', 'Carlos', 44, 1.75);
var person02 = new People('#p2', 'Pedro', 57, 1.90);
var person03 = new People('#p3', 'Juan', 42, 1.65);
var person04 = new People('#p4', 'Pepe', 27, 1.84);
person01 = document.createElement('div');
person02 = document.createElement('div');
person03 = document.createElement('div');
person04 = document.createElement('div');