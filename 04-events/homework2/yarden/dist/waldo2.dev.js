"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Selecting Waldo:
var waldo = document.querySelector('.waldo');
waldo.style.top = '295px';
waldo.style.left = '560px'; //Make form disappear, Waldo appear on clicking submit:

var form = document.querySelector('.form');
var submitButton = document.querySelector('.form__input--submit');
myForm.addEventListener('click', function (event) {
  form.style.display = 'none';
  waldo.style.hidden = 'false';
}); //Create the character class:

var Character =
/*#__PURE__*/
function () {
  function Character(characterId, imageUrl, startingPosition) {
    _classCallCheck(this, Character);

    this.imageUrl = imageUrl;
    this.characterId = characterId;
    this.startingPosition = {};
    this.startingPosition.x = startingPosition.x;
    this.startingPosition.y = startingPosition.y;
    this.whereIsWaldo = document.querySelector('.waldo');
    this.createCaharacter;
  }

  _createClass(Character, [{
    key: "createCaharacter",
    value: function createCaharacter() {
      try {
        if (!character) throw new Error("No Character");
        this.character = document.createElement('img');
        this.character.setAttribute('src', this.imageUrl);
      } catch (e) {
        console.error(e);
      }
    }
  }]);

  return Character;
}(); // Movement:


window.addEventListener('keydown', function (event) {
  try {
    var allowedKeys = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft', 'w', 's', 'd', 'a'];
    if (!event.key in allowedKeys) throw new Error('Not a valid key!');
    var positionChange = 5;

    switch (event.key) {
      case 'ArrowUp':
        waldo.style.top = "".concat(parseInt(waldo.style.top) - positionChange, "px");
        break;

      case 'ArrowDown':
        waldo.style.top = "".concat(parseInt(waldo.style.top) + positionChange, "px");
        break;

      case 'ArrowRight':
        waldo.style.left = "".concat(parseInt(waldo.style.left) + positionChange, "px");
        break;

      case 'ArrowLeft':
        waldo.style.left = "".concat(parseInt(waldo.style.left) - positionChange, "px");
        break;

      case 'w':
        waldo.style.top = "".concat(parseInt(waldo.style.top) - positionChange, "px");
        break;

      case 's':
        waldo.style.top = "".concat(parseInt(waldo.style.top) + positionChange, "px");
        break;

      case 'd':
        waldo.style.left = "".concat(parseInt(waldo.style.left) + positionChange, "px");
        break;

      case 'a':
        waldo.style.left = "".concat(parseInt(waldo.style.left) - positionChange, "px");
        break;
    }
  } catch (e) {
    console.error(e);
  }
}); // Mouseover:
//  When clicked, user gets control of the character ?

function handleSubmit(event) {
  event.preventDefault();
}