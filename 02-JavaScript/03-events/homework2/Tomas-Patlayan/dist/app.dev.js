"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player =
/*#__PURE__*/
function () {
  function Player(imgUrl, pos, familyID) {
    _classCallCheck(this, Player);

    this.imgUrl = imgUrl;
    this.board = document.querySelector(".container-board");
    this.pos = {};
    this.pos.x = pos.x;
    this.pos.y = pos.y;
    this.familyID = familyID;
    this.step = 5;
    this.characterFamily();
  }

  _createClass(Player, [{
    key: "characterFamily",
    value: function characterFamily() {
      this.fmg = document.createElement("img");
      this.fmg.setAttribute("src", this.imgUrl);
      this.fmg.style.width = "400px";
      this.fmg.style.height = "400px";
      this.fmg.style.position = "absolute";
      this.fmg.style.left = "".concat(this.pos.x, "%");
      this.fmg.style.top = "".concat(this.pos.y, "%");
      this.fmg.style.transform = "scaleX(-1)";
      this.board.appendChild(this.fmg);
    }
  }, {
    key: "top",
    value: function top() {
      if (this.pos.y - this.step > 0) {
        this.pos.y -= this.step;
        this.fmg.style.top = "".concat(this.pos.y, "%");
        this.fmg.style.transform = "rotate(90deg)";
      } else {
        this.fmg.style.transform = "rotate(90deg)";
      }
    }
  }, {
    key: "bottom",
    value: function bottom() {
      if (this.pos.y + this.step <= 77) {
        this.pos.y += this.step;
        this.fmg.style.top = "".concat(this.pos.y, "%");
        this.fmg.style.transform = "rotate(270deg)";
      } else {
        this.fmg.style.transform = "rotate(90deg)";
      }
    }
  }, {
    key: "right",
    value: function right() {
      if (this.step + this.pos.x <= 85) {
        this.pos.x += this.step;
        this.fmg.style.left = "".concat(this.pos.x, "%");
        this.fmg.style.transform = "scaleX(-1)";
      } else {
        this.fmg.style.transform = "scaleX(1)";
      }
    }
  }, {
    key: "left",
    value: function left() {
      if (this.pos.x - this.step > 0) {
        this.pos.x -= this.step;
        this.fmg.style.left = "".concat(this.pos.x, "%");
        this.fmg.style.transform = "scaleX(1)";
      } else {
        this.fmg.style.transform = "scaleX(-1)";
      }
    }
  }]);

  return Player;
}();

function handlerSumbit(event) {
  event.preventDefault();
  var form = document.getElementsByTagName("form")[0];
  var circle = document.getElementsByName("character");
  var characterY = form.querySelector("[name= 'positiony']");
  var characterX = form.querySelector("[name= 'positionx']");

  for (var i = 0; i < circle.length; i++) {
    if (circle[i].checked) {
      chooseCharater = circle[i].value;
    }
  }

  var familyY = characterY.value;
  var familyX = characterX.value;

  switch (chooseCharater) {
    case "peter":
      character = new Player("./images/peter.png", {
        y: parseInt(familyY),
        x: parseInt(familyX)
      });
      break;

    case "lois":
      character = new Player("./images/lois.png", {
        y: parseInt(familyY),
        x: parseInt(familyX)
      });
      break;

    case "meg":
      character = new Player("./images/meg.png", {
        y: parseInt(familyY),
        x: parseInt(familyX)
      });
      break;

    case "chris":
      character = new Player("./images/chris.png", {
        y: parseInt(familyY),
        x: parseInt(familyX)
      });
      break;

    case "brian":
      character = new Player("./images/brian.png", {
        y: parseInt(familyY),
        x: parseInt(familyX)
      });
      break;

    case "stwie":
      character = new Player("./images/Stewie.png", {
        y: parseInt(familyY),
        x: parseInt(familyX)
      });
      break;

    default:
  }
}