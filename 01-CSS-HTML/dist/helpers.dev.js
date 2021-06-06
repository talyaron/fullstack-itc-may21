"use strict";

function randomNum() {
  var num = Math.floor(Math.random() * (10 - 1)) + 1;
  return num;
}

function randomColor() {
  var color = "rgb(".concat(Math.floor(Math.random() * 255), ", ").concat(Math.floor(Math.random() * 255), ",").concat(Math.floor(Math.random() * 255), ")");
  return color;
}

function randomSize() {
  var size = Math.floor(Math.random() * (200 - 40)) + 40 + "px";
  return size;
}

function randomPositionTop() {
  var position = Math.floor(Math.random() * (100 - 10)) + 10 + "px";
  return position;
}

function randomPositionLeft() {
  var position = Math.floor(Math.random() * (500 - 100)) + 100 + "px";
  return position;
}