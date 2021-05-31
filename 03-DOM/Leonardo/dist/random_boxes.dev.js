"use strict";

/* 1) create on the dom a random number of boxes (1-10).
2) create them in random colors and random sizes (40px - 200px), and random positions.
3) using setInterval, recrete everything every 5 seconds.
4) do everthing as functions.
5) don't forget to use try-catch and try to think beforhand on the places the functions can fail.
 */
//Define variables:
var buttonStart = document.getElementById('start');
var buttonStop = document.getElementById('stop');
var buttonCycle = setInterval(createBoxes, 5000); //Add event listeners when I click on the buttons:

buttonStart.addEventListener('click', function () {
  buttonCycle = setInterval(createBoxes, 5000);
});
buttonStop.addEventListener('click', function () {
  clearInterval(buttonCycle);
}); //Create boxes:

function createBoxes() {
  try {
    var num = randomNumber();
    var container = document.getElementById("container");

    for (var i = 0; i < num; i++) {
      var element = document.createElement("div");
      container.appendChild(element);
      element.style.backgroundColor = randomColor();
      element.style.width = randomSize();
      element.style.height = randomSize();
      element.style.position = randomPosition();
      element.style.border = randomBorder();
      element.style.borderRadius = randomRadius();
      document.body.style.backgroundColor = randomColor();
    }
  } catch (e) {
    console.error();
  }
} //Functions to get random values:


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