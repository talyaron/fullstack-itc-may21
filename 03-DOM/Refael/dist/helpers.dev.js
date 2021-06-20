"use strict";

var randomColor = function randomColor() {
  return "color: rgb(".concat(Math.floor(Math.random() * 255), ", ").concat(Math.floor(Math.random() * 255), ",").concat(Math.floor(Math.random() * 256), ")");
};