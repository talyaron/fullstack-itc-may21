"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GamePlayer = function GamePlayer(playerID, playerName, playerColor, playerShapeClass) {
  _classCallCheck(this, GamePlayer);

  this.playerID = playerID;
  this.playerName = playerName;
  this.playerColor = playerColor;
  this.playerShapeClass = playerShapeClass;
};

var player1 = new GamePlayer('#player1', 'Yaniv', 'blue', '.circle');
console.log(player1);
var player2 = new GamePlayer('#player2', 'Tal', 'green', '.rectangualr');
console.log(player2);