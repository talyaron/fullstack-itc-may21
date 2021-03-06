"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function handleSubmit(ev) {
  ev.preventDefault();
  var playerName = ev.target.children.id.value;
  var imageSelect = document.querySelectorAll('.image-select');
  var imageChosen = document.querySelectorAll(".image-chosen");
  var playerImage;

  for (var i = 0; i < imageSelect.length; i++) {
    if (imageSelect[i].checked) {
      playerImage = imageChosen[i].src;
    }
  }

  if (playerImage === undefined) {
    throw new Error('No player selected!');
  }

  var posx = parseInt(ev.target.children.posix.value);

  if (posx > 96) {
    posx = 96;
  }

  var posy = parseInt(ev.target.children.posiy.value);

  if (posy > 94) {
    posy = 94;
  }

  var newPiece = new GamePiece("#".concat(playerName), "".concat(playerImage), '50px', '38px', {
    x: posx,
    y: posy
  });
  ev.target.reset();
}

var GamePiece =
/*#__PURE__*/
function () {
  function GamePiece(pieceId, imagePhoto, width, height, position) {
    var _this = this;

    _classCallCheck(this, GamePiece);

    try {
      if (_typeof(position) !== "object") throw new Error('position is not an object');
      if (!("x" in position) || !("y" in position)) throw new Error('starting point should have this format {x:0, y:0}');
      this.height = height;
      this.width = width;
      this.pieceId = pieceId;
      this.imagePhoto = imagePhoto; //inner position

      this.position = {};
      this.position.x = position.x;
      this.position.y = position.y; //initilizing

      this.boardGamed = document.querySelector('#boardGame');
      this.createPeice();
      this.step = 2;
    } catch (e) {
      console.error(e);
    }

    document.addEventListener('keyup', function (ev) {
      return _this.listener(ev);
    });
  }

  _createClass(GamePiece, [{
    key: "createPeice",
    value: function createPeice() {
      try {
        this.piece = document.createElement('img');
        this.piece.setAttribute('src', this.imagePhoto);
        this.piece.setAttribute('width', this.width);
        this.piece.setAttribute('height', this.height);
        this.piece.classList.add("piece");
        this.piece.style.left = "".concat(this.position.x, "%");
        this.piece.style.top = "".concat(this.position.y, "%");
        this.boardGamed.appendChild(this.piece);
      } catch (e) {
        console.error(e);
      }
    } //let create a method for moving left

  }, {
    key: "moveRight",
    value: function moveRight() {
      if (this.step + this.position.x < 98) {
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
      if (this.position.y + this.step < 94) {
        this.position.y += this.step;
        this.piece.style.top = "".concat(this.position.y, "%");
      }
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      if (this.position.y - this.step > -1) {
        this.position.y -= this.step;
        this.piece.style.top = "".concat(this.position.y, "%");
      }
    }
  }, {
    key: "listener",
    value: function listener(ev) {
      switch (ev.key) {
        case "ArrowLeft":
          this.moveLeft();
          break;

        case "ArrowRight":
          this.moveRight();
          break;

        case "ArrowDown":
          this.moveDown();
          break;

        case "ArrowUp":
          this.moveUp();
          break;
      }
    }
  }]);

  return GamePiece;
}();