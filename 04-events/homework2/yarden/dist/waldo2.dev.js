"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var waldo = document.querySelector('.waldo');
waldo.style.top = '295px';
waldo.style.left = '560px';
var myForm = document.querySelector('.form');

myForm.onsubmit = function (event) {
  event.preventDefault();
  var submittedImage = myForm.elements['image'].value;
  var submittedName = myForm.elements['name'].value;
  var submittedX = myForm.elements['x'].value;
  var submittedY = myForm.elements['y'].value;
  console.log(submittedName);
  console.log(submittedImage);
  console.log(submittedX);
  console.log(submittedY);
  var odlaw = new Character(submittedName, submittedImage, {
    x: submittedX,
    y: submittedY
  });
  odlaw.createCaharacter();
  document.body.appendChild.character;
  myForm.style.display = 'none';
  waldo.style.display = 'block';
}; //Create the character class:


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
    this.createCaharacter = this.createCaharacter.bind(this);
  }

  _createClass(Character, [{
    key: "createCaharacter",
    value: function createCaharacter() {
      this.character = document.createElement('img');
      this.character.setAttribute('src', this.imageUrl);
      this.character.style.left = "".concat(this.startingPosition.x, "%");
      this.character.style.top = "".concat(this.startingPosition.y, "%");
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