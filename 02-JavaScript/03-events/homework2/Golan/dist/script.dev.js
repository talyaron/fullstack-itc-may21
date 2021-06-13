"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GamePiece =
/*#__PURE__*/
function () {
  function GamePiece(name, xpos, ypos, avatar) {
    _classCallCheck(this, GamePiece);

    try {
      if (typeof name !== "string") throw new Error("name isn't a string!");
      if (typeof xpos !== "number") throw new Error("xpos isn't a number!");
      if (typeof ypos !== "number") throw new Error("ypos isn't a number!");
      if (typeof avatar !== "url") throw new Error("avatar isnt a url!");
      this.name = name;
      this.xpos = xpos;
      this.ypos = ypos;
      this.avatar = avatar; //this.url? (how to differentiate url and radio selection?)
    } catch (error) {
      console.error(error);
    }
  } //declare info to be logged


  _createClass(GamePiece, [{
    key: "info",
    value: function info() {
      var userInfo = "You submitted: ".concat(this.name, ", ").concat(this.xpos, ", ").concat(this.ypos, ", ").concat(this.avatar);
      console.log(userInfo);
    } //declare info to be injected to DOM after the user submits

  }, {
    key: "addInfoToDOM",
    value: function addInfoToDOM(domElement) {
      domElement.innerHTML += "<p>".concat(this.name, " submitted  ").concat(this.xpos, ",").concat(this.ypos, ",").concat(this.avatar);
    }
  }]);

  return GamePiece;
}(); //new instance test


var user1 = new GamePiece("Bennet", "6", "5", "Avatar");
var user2 = new GamePiece("Lapid", "1", "2", "avatarz"); //where to inject info

var gameBoard = document.querySelector("#gameBoard");
user1.addInfoToDOM(gameBoard);
user2.addInfoToDOM(gameBoard);
var users = []; //what to do with info submitted by user

function handleSubmit(event) {
  // try {
  //     if (!event.target) throw new Error('must target event'); -not sure what type of error I should be looking for
  event.preventDefault();
  console.dir(event.target);
  var name = event.target.elements.name.value;
  var xpos = event.target.elements.xpos.valueAsNumber;
  var ypos = event.target.elements.ypos.valueAsNumber;
  var url = event.target.elements.url.value;
  var radio = event.target.elements.radio.value; // } catch (error) {
  //     console.error(error)
  // }

  users.push(new GamePiece(name, xpos, ypos, url, radio));
  console.log(users);
  var gameBoard = document.querySelector("#gameBoard");
  console.log(gameBoard.id);
  users[users.length - 1].addInfoToDOM(gameBoard);
  event.target.reset();
}