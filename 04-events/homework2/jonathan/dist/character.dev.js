"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Character =
/*#__PURE__*/
function () {
  function Character(pokeID, imageURl, position) {
    _classCallCheck(this, Character);

    try {
      if (_typeof(position) !== "object") throw new Error('Postion is not an object');
      if (!("x" in position) || !("y" in position)) throw new Error('Starting point should have this format {x:0, y:0}');
      this.pokeID = pokeID;
      this.imageURl = imageURl;
      this.position = {};
      this.position.x = position.x;
      this.position.y = position.y; //initilizing

      this.boardGamed = document.querySelector('#boardGame');
      if (!this.boardGamed) throw new Error('The boardGame was not created');
      this.createCharacter();
      this.step = 2;
    } catch (e) {
      console.log(e);
    }
  }

  _createClass(Character, [{
    key: "createCharacter",
    value: function createCharacter() {
      try {
        this.pokemon = document.createElement('img');
        this.pokemon.setAttribute('src', this.imageURl);
        this.pokemon.style.width = "100px";
        this.pokemon.style.height = "100px";
        this.pokemon.style.position = "absolute";
        this.pokemon.style.left = "".concat(this.position.x, "%");
        this.pokemon.style.top = "".concat(this.position.y, "%");
        this.pokemon.style.transform = "scaleX(-1)";
        this.boardGamed.appendChild(this.pokemon);
      } catch (e) {
        console.error(e);
      }
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      if (this.step + this.position.x <= 89) {
        this.position.x += this.step;
        this.pokemon.style.left = "".concat(this.position.x, "%");
        this.pokemon.style.transform = "scaleX(-1)";
      } else {
        this.pokemon.style.transform = "scaleX(1)";
      }
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      if (this.position.x - this.step > 0) {
        this.position.x -= this.step;
        this.pokemon.style.left = "".concat(this.position.x, "%");
        this.pokemon.style.transform = "scaleX(1)";
      } else {
        this.pokemon.style.transform = "scaleX(-1)";
      }
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      if (this.position.y + this.step <= 75) {
        this.position.y += this.step;
        this.pokemon.style.top = "".concat(this.position.y, "%");
        this.pokemon.style.transform = "rotate(270deg)";
      } else {
        this.pokemon.style.transform = "rotate(90deg)";
      }
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      if (this.position.y - this.step > 0) {
        this.position.y -= this.step;
        this.pokemon.style.top = "".concat(this.position.y, "%");
        this.pokemon.style.transform = "rotate(90deg)";
      } else {
        this.pokemon.style.transform = "rotate(270deg)";
      }
    }
  }]);

  return Character;
}();

var form = document.getElementsByTagName("form")[0];
var input = document.querySelector('#id-name');
var radio = document.getElementsByName("pokemon");
var posX = form.querySelector("[name='startx']");
var posY = form.querySelector("[name='starty']");
var character;

function handlerSumbit(event) {
  event.preventDefault();
  var characterId = input.value;
  var characterPosX = posX.value;
  var characterPosY = posY.value;

  for (var i = 0, length = radio.length; i < length; i++) {
    if (radio[i].checked) {
      charChoosen = radio[i].value;
    }
  }

  console.log("The ID: ".concat(characterId, ",\n                      Character Image: ").concat(charChoosen, ",\n                      Position X: ").concat(characterPosX, ",\n                      Position Y: ").concat(characterPosY));

  switch (charChoosen) {
    case 'pika':
      character = new Character(characterId, 'img/piran.gif', {
        x: parseInt(characterPosX),
        y: parseInt(characterPosY)
      });
      break;

    case 'char':
      character = new Character(characterId, 'img/charmander.gif', {
        x: parseInt(characterPosX),
        y: parseInt(characterPosY)
      });
      break;

    case 'bulba':
      character = new Character(characterId, 'img/bulba.gif', {
        x: parseInt(characterPosX),
        y: parseInt(characterPosY)
      });
      break;

    case 'squirtle':
      character = new Character(characterId, 'img/squirtle.gif', {
        x: parseInt(characterPosX),
        y: parseInt(characterPosY)
      });
      break;

    default:
  }
} // Yonathan. I was trying to remove child (to remove the current character on board) after choosing another character
// but I failed. Can you explain me how to do that?