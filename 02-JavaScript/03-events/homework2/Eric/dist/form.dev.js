"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*) create a form to insert a apiece in a game (image, starting position (x,y), id);
2) get all the inforamation from your form;
3) create a new instance of the piece on the board (with a class constructore);
this will add the piece to the board
Extra:
create listeners inside the class, for the piece movement. in the constructor, add the keys for moving the piece.*/
//1 and 2
var newImg = "";

function handleSubmit(ev) {
  try {
    if (!ev) throw new Error('Event doesn`t exist');
    ev.preventDefault();
    console.dir(ev.target.children);
    var name = ev.target.children.name.value;
    var url = ev.target.children.url.value;
    var xpos = ev.target.children.xpos.value;
    var ypos = ev.target.children.ypos.value;
    console.log(name, url, xpos, ypos);
    newImg = new GamePiece("".concat(name), url, {
      x: parseInt(xpos),
      y: parseInt(ypos)
    });
    ev.target.reset();
  } catch (error) {
    console.error(error);
  }
} //clase que cree un personaje cada vez que se rellena el form y la meta en el board cambiando la position que se pone


var GamePiece =
/*#__PURE__*/
function () {
  function GamePiece(nameId, url, position) {
    _classCallCheck(this, GamePiece);

    try {
      if (_typeof(position) !== "object") throw new Error('Position is not defined, not an object');
      if (!("x" in position) || !("y" in position)) throw new Error('First position should have this format {x:0, y:0}');
      this.nameId = nameId;
      this.url = url;
      this.position = {};
      this.position.x = position.x;
      this.position.y = position.y;
      this.boardGame = document.querySelector('.boardGame');
      this.createPiece();
      this.step = 3;
    } catch (e) {
      console.error(e);
    }
  }

  _createClass(GamePiece, [{
    key: "createPiece",
    value: function createPiece() {
      try {
        this.piece = document.createElement('img');
        this.piece.setAttribute('src', this.url);
        this.piece.classList.add('piece');
        this.piece.style.left = "".concat(this.position.x, "%");
        this.piece.style.top = "".concat(this.position.y, "%");
        this.boardGame.appendChild(this.piece);
      } catch (e) {
        console.error(e);
      }
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      try {
        if (this.step + this.position.x < 95) {
          this.position.x += this.step;
          this.piece.style.left = "".concat(this.position.x, "%");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      try {
        if (this.step + this.position.x > 0) {
          this.position.x -= this.step;
          this.piece.style.left = "".concat(this.position.x, "%");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      try {
        if (this.step + this.position.y < 60) {
          this.position.y += this.step;
          this.piece.style.top = "".concat(this.position.y, "%");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      try {
        if (this.step + this.position.y > 0) {
          this.position.y -= this.step;
          this.piece.style.top = "".concat(this.position.y, "%");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }]);

  return GamePiece;
}(); //listeners


document.addEventListener('keyup', function (ev) {
  try {
    if (!document) throw new Error('Review your code, the document doesn`t exist');

    switch (ev.key) {
      case "ArrowLeft":
        newImg.moveLeft();
        break;

      case "ArrowRight":
        newImg.moveRight();
        break;

      case "ArrowUp":
        newImg.moveUp();
        break;

      case "ArrowDown":
        newImg.moveDown();
        break;
    }
  } catch (error) {
    console.error(error);
  }
});