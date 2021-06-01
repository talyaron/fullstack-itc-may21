"use strict";

function randomColor() {
  return "rgb(".concat(Math.floor(Math.random() * 255), ", ").concat(Math.floor(Math.random() * 255), ",").concat(Math.floor(Math.random() * 255), ")");
}

function randomBorderColor() {
  return "rgb(".concat(Math.floor(Math.random() * 255), ", ").concat(Math.floor(Math.random() * 255), ",").concat(Math.floor(Math.random() * 255), ")");
}

function randomHColor() {
  return "rgb(".concat(Math.floor(Math.random() * 255), ", ").concat(Math.floor(Math.random() * 255), ",").concat(Math.floor(Math.random() * 255), ")");
}

function randomSize() {
  var size = Math.floor(Math.random() * (200 - 40) + 40);
  return size;
}

function randomPositionTop() {
  var position = Math.floor(Math.random() * 10 + Math.random() * 100);
  return position;
}

function randomPositionLeft() {
  var position = Math.floor(Math.random() * 20 + Math.random() * 100);
  return position;
}

function randomFontsize() {
  var fontsize = Math.floor(Math.random() * 50 + 50);
  return fontsize;
}

function randomSpin() {
  var spin = Math.floor(Math.random() * 8000 + 1000);
  return spin;
}

function randomNumber() {
  var number = Math.floor(Math.random() * 10 + 1);
  return number;
}