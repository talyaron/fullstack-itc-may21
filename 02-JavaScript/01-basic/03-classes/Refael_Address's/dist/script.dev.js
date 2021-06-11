"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var adrress =
/*#__PURE__*/
function () {
  function adrress(state, street, city, homeNumber) {
    _classCallCheck(this, adrress);

    try {
      if (typeof state !== "string") throw new Error("state isnt a string!");
      if (typeof street !== "string") throw new Error("street isnt a string!");
      if (typeof city !== "string") throw new Error("city isnt a string!");
      if (typeof homeNumber !== "number") throw new Error("Home number isnt a number!");
      this.state = state;
      this.street = street;
      this.city = city;
      this.homeNumber = homeNumber;
    } catch (error) {
      console.log(error);
    }
  }

  _createClass(adrress, [{
    key: "info",
    value: function info() {
      var Personinfo = "personal adrress is: ".concat(this.state, ",").concat(this.street, ",").concat(this.city, ",").concat(this.homeNumber);
      console.log(Personinfo);
    }
  }]);

  return adrress;
}();

var person1 = new adrress("israel", "menashe", "modiin", 3);
var person2 = new adrress("usa", "meldovitch", "miami", 58);
person1.info();
person2.info();
console.log(object);
console.dir(object);