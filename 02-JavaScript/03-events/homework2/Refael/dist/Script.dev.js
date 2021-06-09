"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var downKeys = new Set();
var x = 0;
var y = 0;
var dot = document.querySelector(".dot");
var piece = document.getElementsByClassName("piece");
document.addEventListener("keydown", function (ev) {
  return downKeys.add(ev.key);
});
document.addEventListener("keyup", function (ev) {
  return downKeys["delete"](ev.key);
});

function movingDot() {
  var piece = document.querySelector(".piece");

  try {
    var isDown = function isDown(key) {
      return downKeys.has(key);
    };

    var run = isDown("Shift") ? 5 : 1;

    if (isDown("ArrowDown")) {
      dot.style.top = (y += run) * 4 + "px";
      dot.className = "dot__down";
    }

    if (isDown("ArrowUp")) {
      dot.style.top = (y -= run) * 4 + "px";
      dot.className = "dot__up";
    }

    if (isDown("ArrowRight")) {
      dot.style.left = (x += run) * 4 + "px";
      dot.className = "dot__right";
    }

    if (isDown("ArrowLeft")) {
      dot.style.left = (x -= run) * 4 + "px";
      dot.className = "dot__left";
    }

    if (isDown("s")) {
      piece.style.top = (y += run) * 4 + "px";
    }

    if (isDown("w")) {
      piece.style.top = (y -= run) * 4 + "px";
    }

    if (isDown("d")) {
      piece.style.left = (x += run) * 4 + "px";
    }

    if (isDown("a")) {
      piece.style.left = (x -= run) * 4 + "px";
    }
  } catch (error) {
    console.log(error);
  }

  window.requestAnimationFrame(movingDot);
}

window.requestAnimationFrame(movingDot);

function formGetData(ev) {
  ev.preventDefault();
  console.dir(ev.target.children);
  var n = ev.target.children.name.value;
  var i = ev.target.children.image.value;
  var x = ev.target.children.posx.value;
  var y = ev.target.children.posy.value;
  var object1 = new GamePiece("#".concat(n), "".concat(i), "100px", {
    x: "".concat(x),
    y: "".concat(y)
  });
  ev.target.reset();
} //I used some of Tal's example from class


var GamePiece =
/*#__PURE__*/
function () {
  function GamePiece(pieceId, imageUrl) {
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "50px";
    var postion = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, GamePiece);

    try {
      if (_typeof(postion) !== "object") throw new Error("postion is not an object");
      if (!("x" in postion) || !("y" in postion)) throw new Error("starting point should have this format {x:0, y:0}");
      this.width = width;
      this.pieceId = pieceId;
      this.imageUrl = imageUrl;
      this.postion = {};
      this.postion.x = postion.x;
      this.postion.y = postion.y;
      this.boardGame = document.querySelector("#boardGame");
      this.createPeice();
    } catch (e) {
      console.error(e);
    }
  }

  _createClass(GamePiece, [{
    key: "createPeice",
    value: function createPeice() {
      this.piece = document.createElement("img");
      this.piece.setAttribute("src", this.imageUrl);
      this.piece.setAttribute("width", this.width);
      this.piece.classList.add("piece");
      this.piece.style.left = "".concat(this.postion.x, "%");
      this.piece.style.top = "".concat(this.postion.y, "%");
      this.boardGame.appendChild(this.piece);
    }
  }]);

  return GamePiece;
}();