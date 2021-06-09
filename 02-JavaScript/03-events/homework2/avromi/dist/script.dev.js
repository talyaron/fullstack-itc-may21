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
  //help to create the unique properties of the object
  function GamePiece(pieceId, imageUrl) {
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "50px";
    var postion = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, GamePiece);

    try {
      if (_typeof(postion) !== "object") throw new Error("postion is not an object");
      if (!("x" in postion) || !("y" in postion)) throw new Error("starting point should have this format {x:0, y:0}");
      this.width = width;
      this.pieceId = pieceId;
      this.imageUrl = imageUrl; //inner position

      this.postion = {};
      this.postion.x = postion.x;
      this.postion.y = postion.y; //initilizing

      this.gameBoard = document.querySelector("#gameboard");
      this.createPiece();
      this.step = 2;
    } catch (e) {
      console.error(e);
    }
  } //a method
  //lets create an element on the dom with that id.


  _createClass(GamePiece, [{
    key: "createPiece",
    value: function createPiece() {
      try {
        this.piece = document.createElement("img");
        this.piece.setAttribute("src", this.imageUrl);
        this.piece.setAttribute("width", this.width);
        this.piece.classList.add("piece");
        this.piece.style.left = "".concat(this.postion.x, "%");
        this.piece.style.top = "".concat(this.postion.y, "%");
        this.gameBoard.appendChild(this.piece);
      } catch (e) {
        console.error(e);
      }
    }
  }]);

  return GamePiece;
}();

;
var ghost = new GamePiece("#ghost", "https://art.pixilart.com/37f719b8a62f06d.gif", "70px", {
  x: 10,
  y: 10
});
console.log(ghost);

function handleSubmit(ev) {
  ev.preventDefault();
  console.dir(ev);
  var myPiece = ev.target.children.piece.value;
  var myPieceId = ev.target.children.pieceId.value;
  var myPosition = ev.target.children.position.value; // let myId = ev.target.children.piece.selectedIndex.id;

  console.log(myPiece);
  console.log(myPosition);
  console.log(myPieceId);
  return;
}

;