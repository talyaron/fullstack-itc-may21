"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 1) create a form to insert a apiece in a game (image, starting position (x,y), id);
// 2) get all the inforamation from your form;
// 3) create a new instance of the piece on the board (with a class constructore);
// this will add the piece to the board
// create listeners inside the class, for the piece movement. in the constructor, add the keys for moving the piece.
var GamePiece =
/*#__PURE__*/
function () {
  function GamePiece(imgSrc, positionX, positionY, id) {
    _classCallCheck(this, GamePiece);

    this.imgSrc = imgSrc;
    this.id = id;
    this.positionX = positionX;
    this.positionY = positionY;
    this.gameBoard = document.querySelector("#gameBoard");
    this.createPeice();
    this.step = 2;
  }

  _createClass(GamePiece, [{
    key: "createPeice",
    value: function createPeice() {
      try {
        this.piece = document.createElement("img");
        this.piece.setAttribute("src", this.imgSrc);
        this.piece.classList.add("piece"); // this.piece.setAttribute("id", this.id)

        this.piece.style.left = "".concat(this.positionX, "%");
        this.piece.style.top = "".concat(this.positionY, "%");
        this.gameBoard.appendChild(this.piece);
      } catch (e) {
        console.error(e);
      }
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      if (this.step + this.positionX < 100) {
        this.positionX += this.step;
        this.piece.style.left = "".concat(this.positionX, "%");
      }
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      if (this.positionX - this.step > 0) {
        this.positionX -= this.step;
        this.piece.style.left = "".concat(this.positionX, "%");
      }
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      if (this.positionY + this.step < 100) {
        this.positionY += this.step;
        this.piece.style.top = "".concat(this.positionY, "%");
      }
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      if (this.positionY - this.step > 0) {
        this.positionY -= this.step;
        this.piece.style.top = "".concat(this.positionY, "%");
      }
    }
  }]);

  return GamePiece;
}();

function handleSubmit(ev) {
  ev.preventDefault();
  var imgUrl = ev.target.elements.piece.value;
  var piece1 = document.querySelectorAll('.piece1');
  var realId;
  piece1.forEach(function (p) {
    if (p.checked) {
      realId = p.getAttribute("id");
      console.log(realId);
    }
  });
  var position = document.querySelectorAll('.position');
  var positionX;
  var positionY;
  position.forEach(function (pos) {
    if (pos.checked) {
      console.log(pos);
      positionX = Number(pos.getAttribute("positionX"));
      positionY = Number(pos.getAttribute("positionY"));
      console.log(_typeof(positionX));
      console.log(_typeof(positionY));
    }
  });
  var pieceId = ev.target.elements.pieceId.value; //    const id = ev.target.elements.piece.id;

  var object = new GamePiece(imgUrl, positionX, positionY, pieceId);
  console.dir(object);
  reset(ev.target);
} //LISTERNERS 


document.addEventListener('keyup', function (ev) {
  console.log(ev.key);

  switch (ev.key) {
    case "ArrowLeft":
      img.piece.moveLeft();
      break;

    case "ArrowRight":
      object.moveRight();
      break;

    case "ArrowDown":
      object.moveDown();
      break;

    case "ArrowUp":
      object.moveUp();
      break;

    case "a":
      ghost.moveLeft();
      break;

    case "d":
      ghost.moveRight();
      break;

    case "w":
      ghost.moveUp();
      break;

    case "x":
      ghost.moveDown();
      break;
  }
});