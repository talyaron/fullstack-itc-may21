"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//This is the "creat new player" function
function formGetData(ev) {
  ev.preventDefault();
  console.dir(ev.target.children);
  var n = ev.target.children.name.value;
  var i = ev.target.children.image.value;
  var x = ev.target.children.posx.value;
  var y = ev.target.children.posy.value;
  var object1 = new GamePiece("#".concat(n), "".concat(i), "50px", {
    x: "".concat(x),
    y: "".concat(y)
  });
  ev.target.reset();
} //I used some of Tal's example from class


var GamePiece =
/*#__PURE__*/
function () {
  function GamePiece(pieceId, imageUrl) {
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "30px";
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
      this.container = document.querySelector(".container");
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
      this.piece.style.left = "".concat(this.postion.x, "px");
      this.piece.style.top = "".concat(this.postion.y, "px");
      this.container.appendChild(this.piece);
    }
  }]);

  return GamePiece;
}();

var dotGame = function dotGame() {
  // const piece = document.querySelector(".piece");
  var dot = document.querySelector(".dot");
  dot.style.left = "".concat(window.innerWidth / 2 - 50, "px");
  dot.style.top = "".concat(window.innerHeight / 2 - 50, "px");
  document.addEventListener("keydown", function (ev) {
    var dot = document.querySelector(".dot");
    var move = 10;
    var dotUp = dot.style.top;
    var dotLeft = dot.style.left;
    var dotUpNum = Number(dotUp.replace("px", ""));
    var dotLeftNum = Number(dotLeft.replace("px", "")); //This is the actuall game function which moves the players around

    if (ev.key === "ArrowDown") {
      dot.style.content = "url(/02-JavaScript/03-events/homework2/Refael_secondAttampt/images/dot__down.png)";
      dotUpNum += move;
      dotUp = "".concat(dotUpNum, "px");
      dot.style.top = dotUp;
      dot.addEventListener("mouseenter", function (ev) {
        dot.style.content = "url(/02-JavaScript/03-events/homework2/Refael_secondAttampt/images/dot__down-hover.png)";
      });

      if (dot.style.top === "378.5px") {
        dotUpNum -= move;
        dotUp = "".concat(dotUpNum, "px");
        dot.style.top = dotUp;
      }
    }

    if (ev.key === "ArrowUp") {
      dot.style.content = "url(/02-JavaScript/03-events/homework2/Refael_secondAttampt/images/dot__up.png)";
      dotUpNum -= move;
      dotUp = "".concat(dotUpNum, "px");
      dot.style.top = dotUp;

      if (dot.style.top === "8.5px") {
        dotUpNum += move;
        dotUp = "".concat(dotUpNum, "px");
        dot.style.top = dotUp;
      }

      dot.addEventListener("mouseenter", function (ev) {
        dot.style.content = "url(/02-JavaScript/03-events/homework2/Refael_secondAttampt/images/dot__up-hover.png)";
      });
    }

    if (ev.key === "ArrowLeft") {
      dot.style.content = "url(/02-JavaScript/03-events/homework2/Refael_secondAttampt/images/dot__left.png)";
      dotLeftNum -= move;
      dotLeft = "".concat(dotLeftNum, "px");
      dot.style.left = dotLeft;

      if (dot.style.left === "3px") {
        dotLeftNum += move;
        dotLeft = "".concat(dotLeftNum, "px");
        dot.style.left = dotLeft;
      }

      dot.addEventListener("mouseenter", function (ev) {
        dot.style.content = "url(/02-JavaScript/03-events/homework2/Refael_secondAttampt/images/dot__left-hover.png)";
      });
    }

    if (ev.key === "ArrowRight") {
      dot.style.content = "url(/02-JavaScript/03-events/homework2/Refael_secondAttampt/images/dot__right.png)";
      dotLeftNum += move;
      dotLeft = "".concat(dotLeftNum, "px");
      dot.style.left = dotLeft;
      console.log(dotLeft);

      if (dot.style.left === "1023px") {
        dotLeftNum -= move;
        dotLeft = "".concat(dotLeftNum, "px");
        dot.style.left = dotLeft;
      }

      dot.addEventListener("mouseenter", function (ev) {
        dot.style.content = "url(/02-JavaScript/03-events/homework2/Refael_secondAttampt/images/dot__right-hover.png)";
      });
    }
  });
};

var pieceGame = function pieceGame() {
  document.addEventListener("keydown", function (ev) {
    var piece = document.querySelector(".piece");
    var move = 10;
    var pieceUp = piece.style.top;
    var pieceLeft = piece.style.left;
    var pieceUpNum = Number(pieceUp.replace("px", ""));
    var pieceLeftNum = Number(pieceLeft.replace("px", ""));

    if (ev.key === "s") {
      pieceUpNum += move;
      pieceUp = "".concat(pieceUpNum, "px");
      piece.style.top = pieceUp;

      if (piece.style.top === "290px") {
        pieceUpNum -= move;
        pieceUp = "".concat(pieceUpNum, "px");
        piece.style.top = pieceUp;
      }
    }

    if (ev.key === "w") {
      pieceUpNum -= move;
      pieceUp = "".concat(pieceUpNum, "px");
      piece.style.top = pieceUp;
      console.log(pieceUp);

      if (piece.style.top === "-40px") {
        pieceUpNum += move;
        pieceUp = "".concat(pieceUpNum, "px");
        piece.style.top = pieceUp;
      }
    }

    if (ev.key === "d") {
      pieceLeftNum += move;
      pieceLeft = "".concat(pieceLeftNum, "px");
      piece.style.left = pieceLeft;

      if (piece.style.left === "1000px") {
        pieceLeftNum -= move;
        pieceLeft = "".concat(pieceLeftNum, "px");
        piece.style.left = pieceLeft;
      }
    }

    if (ev.key === "a") {
      pieceLeftNum -= move;
      pieceLeft = "".concat(pieceLeftNum, "px");
      piece.style.left = pieceLeft;

      if (piece.style.left === "20px") {
        pieceLeftNum += move;
        pieceLeft = "".concat(pieceLeftNum, "px");
        piece.style.left = pieceLeft;
      }
    }
  });
};

dotGame();
pieceGame();