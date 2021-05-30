"use strict";

//random number of boxes
var num = Math.floor(Math.random() * 10) + 1;
var size = Math.floor(Math.random() * (200 - 40) + 40);
createContainer(num, size);

function createContainer(num, size) {
  try {
    var container = document.getElementById("container");

    for (var i = 0; i < num; i++) {
      var element = document.createElement("div");
      container.appendChild(element);
      var color = randomColor();
      element.style.backgroundColor = color;
      element.style.width = "".concat(size, "px");
      element.style.height = "".concat(size, "px");
    }
  } catch (e) {
    console.error();
  }
}

function randomColor() {
  return "rgb(".concat(Math.floor(Math.random() * 255), ", ").concat(Math.floor(Math.random() * 255), ",").concat(Math.floor(Math.random() * 255), ")");
}