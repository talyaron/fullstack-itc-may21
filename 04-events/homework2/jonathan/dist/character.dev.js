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
      if (_typeof(position) !== "object") throw new Error('Position is not an object');
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
        if (this.boardGamed.hasChildNodes()) {
          this.boardGamed.removeChild(document.querySelector('.image'));
        }

        this.pokemon = document.createElement('img');
        this.pokemon.setAttribute('src', this.imageURl);
        this.pokemon.style.width = "100px";
        this.pokemon.style.height = "100px";
        this.pokemon.classList.add('image');
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
      if (this.step + this.position.x <= 85) {
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
      if (this.position.y + this.step <= 77) {
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

var character;

function handlerSumbit(event) {
  event.preventDefault();
  var form = document.getElementsByTagName("form")[0];
  var input = document.querySelector('#id-name');
  var radio = document.getElementsByName("pokemon");
  var posX = form.querySelector("[name='startx']");
  var posY = form.querySelector("[name='starty']");

  try {
    var characterId = input.value;
    if (characterId === "") throw new Error('The id is empty, please write an id');
    var characterPosX = posX.value;
    if (!characterPosX) throw new Error('Any error for PosX');
    var characterPosY = posY.value;
    if (!characterPosY) throw new Error('Any error for Posy');

    for (var i = 0, length = radio.length; i < length; i++) {
      if (radio[i].checked) {
        charChoosen = radio[i].value;
      }
    }

    if (!charChoosen) throw new Error('Error Image');
    console.log("The ID: ".concat(characterId, ", Character Image: ").concat(charChoosen, ", Position X: ").concat(characterPosX, ", Position Y: ").concat(characterPosY));

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
  } catch (e) {
    console.log(e);
  }
}