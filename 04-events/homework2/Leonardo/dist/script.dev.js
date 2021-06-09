"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* 1) create a form to insert a a piece in a game (image, starting position (x,y), id);
2) get all the inforamation from your form;
3) create a new instance of the piece on the board (with a class constructor);
this will add the piece to the board */
var GamePiece =
/*#__PURE__*/
function () {
  //help to create the unique properties of the object
  function GamePiece(pieceId, imageUrl, width, postion) {
    _classCallCheck(this, GamePiece);

    try {
      if (_typeof(postion) !== "object") throw new Error('Postion is not an object');
      if (!("x" in postion) || !("y" in postion)) throw new Error('Starting point should have this format {x:0, y:0}');
      this.width = width;
      this.pieceId = pieceId;
      this.imageUrl = imageUrl; //inner position

      this.postion = {};
      this.postion.x = postion.x;
      this.postion.y = postion.y; //initilizing

      this.boardGamed = document.querySelector('#boardGame');
      if (!this.boardGamed) throw new Error('The boardGame its not exist');
      this.createPeice();
      this.step = 2;
    } catch (e) {
      console.error(e);
    }
  } //lets create an element on the dom with that id.


  _createClass(GamePiece, [{
    key: "createPeice",
    value: function createPeice() {
      try {
        this.piece = document.createElement('img');
        this.piece.setAttribute('src', this.imageUrl);
        this.piece.setAttribute('width', this.width);
        this.piece.classList.add("piece");
        this.piece.style.left = "".concat(this.postion.x, "%");
        this.piece.style.top = "".concat(this.postion.y, "%");
        this.boardGamed.appendChild(this.piece);
      } catch (e) {
        console.error(e);
      }
    } //let create a method for moving

  }, {
    key: "moveRight",
    value: function moveRight() {
      try {
        if (this.step + this.postion.x < 85) {
          this.postion.x += this.step;
          this.piece.style.left = "".concat(this.postion.x, "%");
          this.piece.style.transform = "rotateY(0deg)";
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      try {
        if (this.postion.x - this.step > 0) {
          this.postion.x -= this.step;
          this.piece.style.left = "".concat(this.postion.x, "%");
          this.piece.style.transform = "rotateY(180deg)";
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      try {
        if (this.postion.y + this.step < 82) {
          this.postion.y += this.step;
          this.piece.style.top = "".concat(this.postion.y, "%");
          this.piece.style.transform = "rotateZ(90deg)";
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      try {
        if (this.postion.y - this.step > 0) {
          this.postion.y -= this.step;
          this.piece.style.top = "".concat(this.postion.y, "%");
          this.piece.style.transform = "rotateZ(270deg)";
        }
      } catch (error) {
        console.error(error);
      }
    }
  }]);

  return GamePiece;
}(); // instance


var pacman = new GamePiece('#pacman', 'https://i.gifer.com/l3K.gif', '15%', {
  x: 50,
  y: 50
});
var ghost = new GamePiece('#ghost', 'https://art.pixilart.com/37f719b8a62f06d.gif', '15%', {
  x: 10,
  y: 10
});
var newPlayer = "";

function handleSubmit(ev) {
  try {
    if (!ev) throw new Error('The event doesn`t exist');
    ev.preventDefault();
    var images = ev.target.querySelectorAll('[name="playerImg"]');
    var imageURL;

    for (var i = 0; i < images.length; i++) {
      if (images[i].checked) {
        imageURL = document.querySelector("label[for=\"".concat(images[i].id, "\"")).children[0].src;
      }
    }

    if (!imageURL) throw new Error('You should select an image');
    var startingPointX = ev.target.children.startingPointX.value;
    var startingPointY = ev.target.children.startingPointY.value;
    var playerWidth = ev.target.children.width.value;
    var idPlayer = ev.target.children.id.value;
    console.log("The form information is:\n            Image src: ".concat(imageURL, "\n            Position: ").concat(startingPointX, ", ").concat(startingPointY, "\n            Player width: ").concat(playerWidth, "\n            Player ID: ").concat(idPlayer));
    newPlayer = new GamePiece("#".concat(idPlayer), imageURL, "".concat(playerWidth, "%"), {
      x: startingPointX,
      y: startingPointY
    });
    ev.target.reset();
  } catch (error) {
    console.error(error);
  }
} //I know that I didnt apply "import and export" between listeners.js and script.js, however I told that to Tal and he is going to teach that soon (I tried to do it by myself but I couldn`t