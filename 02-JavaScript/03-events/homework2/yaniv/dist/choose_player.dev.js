"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var isModalOpenT1 = false;
var isModalOpenT2 = false;

function openModal() {
  try {
    var addToTeam1 = document.querySelector(".team__addPlayers--team1");
    var addToTeam2 = document.querySelector(".team__addPlayers--team2");
    var modal = document.querySelector(".modalWrapper");
    var modalTeam1 = document.querySelector(".modalBox--team1");
    var modalTeam2 = document.querySelector(".modalBox--team2");
    addToTeam1.addEventListener("click", function (ev) {
      isModalOpenT1 = true;
      modal.style.display = "flex";
      modalTeam1.style.display = "unset";
    });
    addToTeam2.addEventListener("click", function (ev) {
      isModalOpenT2 = true;
      modal.style.display = "flex";
      modalTeam2.style.display = "unset";
    });
  } catch (er) {
    alert(er);
    console.error(er);
  }
}

function closeModal() {
  try {
    var close = document.querySelectorAll(".close");
    var modal = document.querySelector(".modalWrapper");
    var modalTeam1 = document.querySelector(".modalBox--team1");
    var modalTeam2 = document.querySelector(".modalBox--team2");
    close.forEach(function (el) {
      el.addEventListener("click", function (ev) {
        isModalOpenT1 = false;
        isModalOpenT2 = false;
        modal.style.display = "none";
        modalTeam1.style.display = "none";
        modalTeam2.style.display = "none";
      });
    });
  } catch (er) {
    alert(er);
    console.error(er);
  }
}

function handleSubmit(ev) {
  try {
    ev.preventDefault();
    var data = ev.target;
    var images = data.querySelectorAll('[name="playerImg"]');
    var imageURL;

    for (var i = 0; i < images.length; i++) {
      if (images[i].checked) {
        imageURL = document.querySelector("label[for=\"".concat(images[i].id, "\"")).children[0].src;
        break;
      }
    }

    if (imageURL === undefined) {
      throw new Error('No player was selected!');
    }

    var id = data.querySelector('[name="playerName"').value;
    var position = {};
    position.x = Number(data.querySelector('[name="xPos"').value);
    position.y = Number(data.querySelector('[name="yPos"').value);
    var modal = document.querySelector(".modalWrapper");
    var modalTeam1 = document.querySelector(".modalBox--team1");
    var modalTeam2 = document.querySelector(".modalBox--team2");
    isModalOpenT1 = false;
    isModalOpenT2 = false;
    modal.style.display = "none";
    modalTeam1.style.display = "none";
    modalTeam2.style.display = "none";
    var player = new Player(imageURL, position, id);
    data.reset();
  } catch (er) {
    alert(er);
    console.error(er);
  }
}

var Player =
/*#__PURE__*/
function () {
  function Player(imageURL, position, id) {
    var _this = this;

    _classCallCheck(this, Player);

    try {
      this.imageURL = imageURL;
      this.position = {};
      if (position.x === null || position.y === null) throw new Error("Couldn't place the player");
      this.position.x = position.x;
      this.position.y = position.y;
      this.id = id;
      this.board = document.querySelector('.gameBoard');
      this.modal = document.querySelector(".modalWrapper");
      this.addPlayer();
      this.change = 1;
      document.addEventListener('keydown', function (ev) {
        if (_this.player.classList.contains('gameBoard__item--team1')) {
          switch (ev.key) {
            case "a":
              _this.moveLeft();

              break;

            case "d":
              _this.moveRight();

              break;

            case "w":
              _this.moveUp();

              break;

            case "s":
              _this.moveDown();

              break;
          }
        } else {
          switch (ev.key) {
            case "ArrowLeft":
              _this.moveLeft();

              break;

            case "ArrowRight":
              _this.moveRight();

              break;

            case "ArrowUp":
              _this.moveUp();

              break;

            case "ArrowDown":
              _this.moveDown();

              break;
          }
        }
      });
    } catch (er) {
      console.error(er);
    }
  }

  _createClass(Player, [{
    key: "addPlayer",
    value: function addPlayer() {
      try {
        this.player = document.createElement('img');
        this.player.setAttribute('src', this.imageURL);
        this.player.setAttribute('title', this.id);
        this.player.classList.add("gameBoard__item");
        this.player.classList.add("gameBoard__item--player");
        this.player.style.left = "".concat(this.position.x, "%");
        this.player.style.top = "".concat(this.position.y, "%");

        if (this.position.x > 50) {
          this.player.style.transform = 'scaleX(-1)';
          this.player.classList.add("gameBoard__item--team2");
        } else {
          this.player.classList.add("gameBoard__item--team1");
        }

        this.board.appendChild(this.player);
        return this.player;
      } catch (e) {
        console.error(e);
      }
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      if (!isModalOpenT1 && !isModalOpenT2 && this.position.x + this.change <= 90) {
        this.position.x += this.change;
        this.player.style.left = "".concat(this.position.x, "%");
      }
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      if (!isModalOpenT1 && !isModalOpenT2 && this.position.x - this.change >= 1) {
        this.position.x -= this.change;
        this.player.style.left = "".concat(this.position.x, "%");
      }
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      if (!isModalOpenT1 && !isModalOpenT2 && this.position.y + this.change <= 60) {
        this.position.y += this.change;
        this.player.style.top = "".concat(this.position.y, "%");
      }
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      if (!isModalOpenT1 && !isModalOpenT2 && this.position.y - this.change >= 20) {
        this.position.y -= this.change;
        this.player.style.top = "".concat(this.position.y, "%");
      }
    }
  }]);

  return Player;
}();

openModal();
closeModal();