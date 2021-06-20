"use strict";

//Functions to get random values:
function randomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function randomColor() {
  return "rgb(".concat(Math.floor(Math.random() * 255), ", ").concat(Math.floor(Math.random() * 255), ",").concat(Math.floor(Math.random() * 255), ")");
}

function randomSize() {
  var size = Math.floor(Math.random() * (200 - 40) + 40);
  return "".concat(size, "px");
}

function randomPosition() {
  var position = ["static", "absolute", "fixed", "relative", "sticky", "initial", "inherit"];
  var randomPosition = Math.floor(Math.random() * position.length);
  return position[randomPosition];
}

function randomBorder() {
  var border = ["none", "hidden", "dashed", "dotted", "double", "groove", "inset", "outset", "ridge", "solid"];
  var randomValue = Math.floor(Math.random() * border.length);
  var num = randomNumber();
  var color = randomColor();
  return "".concat(num, "px ").concat(border[randomValue], " ").concat(color);
}

function randomRadius() {
  var radius = Math.floor(Math.random() * 100) + 1;
  return "".concat(radius, "%");
}