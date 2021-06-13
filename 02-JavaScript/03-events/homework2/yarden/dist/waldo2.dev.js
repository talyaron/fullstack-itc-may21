"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var waldo = document.querySelector('.waldo');
waldo.style.display = 'none'; //Create the character class:

var Character =
/*#__PURE__*/
function () {
  function Character(characterId, imageUrl, startingPosition) {
    _classCallCheck(this, Character);

    try {
      if (imageUrl === null) throw new Error('No image!');
      this.imageUrl = imageUrl;
      this.characterId = characterId;
      this.startingPosition = {};
      this.startingPosition.x = startingPosition.x;
      this.startingPosition.y = startingPosition.y;
      this.whereIsWaldo = document.querySelector('.waldo'); // this.createCharacter = this.createCharacter.bind(this)
    } catch (e) {
      console.error(e);
    }
  }

  _createClass(Character, [{
    key: "createCharacter",
    value: function createCharacter() {
      var character = document.createElement('img');
      character.setAttribute('src', this.imageUrl);
      character.style.left = "".concat(this.startingPosition.x, "px");
      character.style.top = "".concat(this.startingPosition.y, "px");
      return character;
    }
  }]);

  return Character;
}(); // Movement:


window.addEventListener('keyup', function (ev) {
  try {
    if (Character === null) throw new Error('No characters!');
    var positionChange = 5;

    switch (ev.key) {
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
  } catch (error) {}
}); //Func for form submission:

var myForm = document.querySelector('.form');

myForm.onsubmit = function (event) {
  try {
    if (myForm === null) throw new Error('No form!');
    event.preventDefault();
    var submittedImage = myForm.elements['image'].value;
    var submittedName = myForm.elements['name'].value;
    var submittedX = myForm.elements['x'].value;
    var submittedY = myForm.elements['y'].value; // Log user input to console:

    console.log(submittedName);
    console.log(submittedImage);
    console.log(submittedX);
    console.log(submittedY); // Create character 2 (Odlaw):

    var board = document.querySelector('.board');
    var odlaw = new Character(submittedName, submittedImage, {
      x: submittedX,
      y: submittedY
    });
    odlaw.createCharacter();
    board.appendChild(odlaw.createCharacter());
    console.log(odlaw);
    myForm.style.display = 'none';
    waldo.style.display = 'block';
    waldo.style.top = '295px';
    waldo.style.left = '560px';
  } catch (error) {}
};