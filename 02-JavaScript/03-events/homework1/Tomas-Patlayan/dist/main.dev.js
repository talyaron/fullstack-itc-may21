"use strict";

var box = document.querySelector(".box");
var mLeft = 0;
var mTop = 0;
var move = 10;
var rotateRight = 90;
var rotateLeft = 270;
var rotateUp = 360;
var rotateDown = 180;
document.addEventListener("keydown", function (e) {
  if (e.keyCode == "39") {
    moveRight();
  }

  if (e.keyCode == "37") {
    moveLeft();
  }

  if (e.keyCode == "38") {
    moveUp();
  }

  if (e.keyCode == "40") {
    moveDown();
  }
});
box.addEventListener("mouseout", function (e) {
  boxChange = e.target;
  boxChange.src = "https://www.thesprucepets.com/thmb/MysS9-nXni5Mq53c4H3l7lxLJ8U=/1936x1089/smart/filters:no_upscale()/AmericanPitBullTerrierMoniqueRodriguez-be4b597e914e46f084adbe5f0a2a9ccc.jpg";
});
box.addEventListener("mouseover", function (e) {
  boxChange2 = e.target;
  boxChange2.src = "https://images.unsplash.com/photo-1576434795764-7e27901b7af3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";
});

var moveRight = function moveRight() {
  mLeft += move;
  box.style.marginLeft = "".concat(mLeft, "px");
  /*YS: Very nice job of splitting your code into functions. Remeber DRY (dont repeat yourself) - all of these code-blocks are very similar, so it would
  be better to create another function that accepts different parameters: const moveDog = (move, direction, rotate) = {} 
  and call that function 4 times.*/

  box.style.transform = "rotate(".concat(rotateRight, "deg)");
};

var moveLeft = function moveLeft() {
  mLeft -= move;
  box.style.marginLeft = "".concat(mLeft, "px");
  box.style.transform = "rotate(".concat(rotateLeft, "deg)");
};

var moveUp = function moveUp() {
  mTop -= move;
  box.style.marginTop = "".concat(mTop, "px");
  box.style.transform = "rotate(".concat(rotateUp, "deg)");
};

var moveDown = function moveDown() {
  mTop += move;
  box.style.marginTop = "".concat(mTop, "px");
  box.style.transform = "rotate(".concat(rotateDown, "deg)");
};