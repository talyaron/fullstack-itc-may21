"use strict";

function randomColor() {
  return "rgb(".concat(Math.floor(Math.random() * 255), ", ").concat(Math.floor(Math.random() * 255), ",").concat(Math.floor(Math.random() * 255), ")");
}

function randomSize() {
  var size = Math.floor(Math.random() * (200 - 40) + 40);
  return size;
}