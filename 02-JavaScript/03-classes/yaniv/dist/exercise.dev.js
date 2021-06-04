"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player =
/*#__PURE__*/
function () {
  function Player(playerID, playerName, playerColor, playerShapeClass) {
    _classCallCheck(this, Player);

    this.playerID = playerID;
    this.playerName = playerName;
    this.playerColor = playerColor;
    this.playerShapeClass = playerShapeClass;
    this.playerDesc();
  }

  _createClass(Player, [{
    key: "playerDesc",
    value: function playerDesc() {
      console.log("Player Name: ".concat(this.playerName, "; Player Color: ").concat(this.playerColor, "; Player Shape: ").concat(this.playerShapeClass));
    }
  }]);

  return Player;
}();

var player1 = new Player('player1', 'Yaniv', 'blue', 'circle');
console.log(player1);
var player2 = new Player('player2', 'Tal', 'green', 'rectangualr');
console.log(player2);