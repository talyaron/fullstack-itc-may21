"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

document.querySelector('.button').addEventListener('click', function () {
  document.querySelector('.form_modal').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click', function () {
  document.querySelector('.form_modal').style.display = 'none';
});

var GamePlayer =
/*#__PURE__*/
function () {
  function GamePlayer(playerId, playerImg, position) {
    _classCallCheck(this, GamePlayer);

    try {
      if (_typeof(position) !== "object") throw new Error('position is not an object');
      if (!("x" in position) || !("y" in position)) throw new Error('starting point should have this format {x:0, y:0}');
      this.playerId = playerId;
      this.playerImg = playerImg;
      this.position = {};
      this.position.x = position.x;
      this.position.y = position.y; ///----------------------

      this.boardArea = document.querySelector('#gameBoard');
      this.createPLayer();
      this.step = 2;
    } catch (e) {
      console.log(e);
    }
  }

  _createClass(GamePlayer, [{
    key: "createPLayer",
    value: function createPLayer() {
      try {
        this.player = document.createElement('img');
        this.player.setAttribute('src', this.playerImg);
        this.player.style.position = "absolute";
        this.player.style.width = "100px";
        this.player.style.height = "100px";
        this.player.style.left = "".concat(this.position.x, "%");
        this.player.style.top = "".concat(this.position.y, "%");
        this.boardArea.appendChild(this.player);
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      if (this.step + this.position.x < 96) {
        this.position.x += this.step;
        this.piece.style.left = "".concat(this.position.x, "%");
      }
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      if (this.position.x - this.step > -1) {
        this.position.x -= this.step;
        this.piece.style.left = "".concat(this.position.x, "%");
      }
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      if (this.position.y + this.step < 95) {
        this.position.y += this.step;
        this.piece.style.top = "".concat(this.position.y, "%");
      }
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      if (this.position.y - this.step > -2) {
        this.position.y -= this.step;
        this.piece.style.top = "".concat(this.position.y, "%");
      }
    }
  }]);

  return GamePlayer;
}();

function handleSubmit(ev) {
  ev.preventDefault();
  var inputName = document.querySelector('#charName');
  var radioInput = document.querySelectorAll('.charImg');
  var posX = document.querySelector("[name='posix']");
  var posY = document.querySelector("[name='posiy']");

  try {
    var charName = inputName.value;
    if (charName === "") throw new Error('The name is empty, please add a name');
    var charPosX = posX.value;
    if (!charPosX) throw new Error('error of position X');
    var charPosY = posY.value;
    if (!charPosY) throw new Error('error of position Y');
    var charpic;

    for (var i = 0, length = radioInput.length; i < length; i++) {
      if (radioInput[i].checked) {
        charpic = radioInput[i].value;
      }
    }

    console.log(charName, charpic, charPosX, charPosY);
    var newSouthPark = new GamePlayer("#".concat(charName), "".concat(charpic), {
      x: parseInt(charPosX),
      y: parseInt(charPosY)
    });
    document.addEventListener('keyup', function (ev) {
      console.log(ev.key);

      switch (ev.key) {
        case "ArrowLeft":
          newSouthPark.moveLeft();
          break;

        case "ArrowRight":
          newSouthPark.moveRight();
          break;

        case "ArrowDown":
          newSouthPark.moveDown();
          break;

        case "ArrowUp":
          newSouthPark.moveUp();
          break;
      }
    });
  } catch (e) {
    console.log(e);
  }
}