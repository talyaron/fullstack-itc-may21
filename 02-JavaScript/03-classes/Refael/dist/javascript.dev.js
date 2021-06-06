"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GamePiece_dog = function GamePiece_dog(peiceId, color, border) {
  _classCallCheck(this, GamePiece_dog);

  this.peiceId = peiceId;
  this.color = color;
  this.border = border;
};

var GamePiece_cat =
/*#__PURE__*/
function () {
  function GamePiece_cat(peiceId, color, border) {
    _classCallCheck(this, GamePiece_cat);

    this.peiceId = peiceId;
    this.color = color;
    this.border = border;
    this.body = document.querySelector("body");
    this.creatPiece();
  }

  _createClass(GamePiece_cat, [{
    key: "creatPiece",
    value: function creatPiece() {
      this.piece = document.createElement("div");
      this.body = document.appendChild(this.piece);
    }
  }]);

  return GamePiece_cat;
}();

var dog1 = new GamePiece_dog("#elssa", "red", "3px solid brown");
var dog2 = new GamePiece_dog("#bonni", "blue", "2px dashed green");
var cat = new GamePiece_cat("#mitzi", "black", "10px dashed blue");
console.log(dog1);
console.log(dog2);
console.log(cat);