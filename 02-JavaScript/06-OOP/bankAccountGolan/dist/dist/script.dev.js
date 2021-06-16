"use strict";

// add transcations to dom function:
var overView = document.querySelector("#overview");
var newTransction;

var Transaction =
/** @class */
function () {
  function Transaction(name, banknum, branch, acc, amount) {
    this.name = name;
    this.banknum = banknum;
    this.branch = branch;
    this.acc = acc;
    this.amount = amount;
  }

  return Transaction;
}();

(void 0).createPiece();
createPiece();
{
  (void 0).piece = document.createElement('img');
  (void 0).piece.className = (void 0).name;
  (void 0).piece.banknum = (void 0).banknum;
  (void 0).piece.branch = (void 0).branch;
  (void 0).piece.acc = (void 0).acc;
  (void 0).piece.amount = (void 0).amount;
  console.log((void 0).piece);
  gameBoard.appendChild((void 0).piece);
  console.log((void 0).piece.src);
} //calculate total here:
//instance test

var user1 = new printInfo("Bennet", "6", "5", "Avatar");
var user2 = new printInfo("Lapid", "1", "2", "avatarz"); // where to inject info

user1.addInfoToDOM(overView);
user2.addInfoToDOM(overView);
var users = [];

function handleSubmit(event) {
  event.preventDefault();
  console.dir(event.target);
  var name = event.target.elements.name.value;
  var xpos = Number(event.target.elements.xpos.value);
  var ypos = Number(event.target.elements.ypos.value);
  var url = event.target.elements.url.value;
  var radio = event.target.elements.radio.value;
  createPiece();
  {
    this.piece = document.createElement('img');
    this.piece.className = this.name;
    this.piece.style.position = "relative";
    this.piece.style.left = xpos;
    this.piece.style.bottom = ypos;
    this.piece.style.height = this.height;
    this.piece.style.width = this.width;
    this.piece.src = this.url;
    console.log(this.piece);
    gameBoard.appendChild(this.piece);
    console.log(this.piece.src);
  }
}