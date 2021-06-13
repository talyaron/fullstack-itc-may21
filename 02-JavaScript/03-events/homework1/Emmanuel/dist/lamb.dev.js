"use strict";

var lambPic = null;

function init() {
  lambPic = document.getElementById("lambPic");
  lambPic.style.position = "relative";
  lambPic.style.left = "500px";
  lambPic.style.top = "300px";
}

function getKeyAndMove(e) {
  var key_code = e.which || e.keyCode;

  switch (key_code) {
    case 37:
      moveLeft();
      break;

    case 38:
      moveUp();
      break;

    case 39:
      moveRight();
      break;

    case 40:
      moveDown();
      break;
  }
}

function moveLeft() {
  lambPic.style.left = parseInt(lambPic.style.left) - 5 + "px";
  lambPic.style.transform = "rotate(0deg)";
}

function moveUp() {
  lambPic.style.top = parseInt(lambPic.style.top) - 5 + "px";
  lambPic.style.transform = "rotate(-7deg)";
}

function moveRight() {
  lambPic.style.left = parseInt(lambPic.style.left) + 5 + "px";
  lambPic.style.transform = "rotate(0deg)";
}

function moveDown() {
  lambPic.style.top = parseInt(lambPic.style.top) + 5 + "px";
  lambPic.style.transform = "rotate(7deg)";
}

window.onload = init;