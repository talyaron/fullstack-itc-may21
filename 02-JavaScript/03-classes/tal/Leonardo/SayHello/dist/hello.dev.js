"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person =
/*#__PURE__*/
function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: "sayHello",
    value: function sayHello() {
      console.log("Hola mi nombre es ".concat(this.name));
    }
  }, {
    key: "sayBye",
    value: function sayBye() {
      console.log("Mi nombre es ".concat(this.name, " y me despido"));
    }
  }]);

  return Person;
}();

var person1 = new Person("Carlos");
person1.sayHello();
var person2 = new Person("Juan");
person2.sayBye();