"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Selecting Waldo:
var waldo = document.querySelector('.waldo');
waldo.style.top = '295px';
waldo.style.left = '560px'; //Create class in case more characters will be added in the future:

var Character =
/*#__PURE__*/
function () {
  function Character(characterId, imageUrl, width, height) {
    _classCallCheck(this, Character);

    this.imageUrl = imageUrl;
    this.width = width;
    this.height = height;
    this.whereIsWaldo = document.querySelector('where-is-waldo');
    this.createCaharacter;
  }

  _createClass(Character, [{
    key: "createCaharacter",
    value: function createCaharacter() {
      try {
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
  }
}); // Mouseover:

waldo.addEventListener('mouseover', function (event) {
  waldo.style.display = 'none';
  alert('Did you look for me?');
});