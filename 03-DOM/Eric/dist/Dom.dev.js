"use strict";

//1) create on the dom a     (1-10).
//2) create them in random colors and random sizes (40px - 200px);
//3) using setInterval, recrete everything every 5 seconds.
//4) do everthing as functions.
//5) don't forget to use try-catch and try to think beforhand on the places the functions can fail.
//change boxes
setInterval(function () {
  createbox();
  ;
}, 5000);

function createbox() {
  var number = randomNumber();
  var container = document.querySelector('.container');
  container.innerHTML = "";

  for (var i = 0; i < number; i++) {
    var element = document.createElement("div");
    console.log(element);
    container.appendChild(element);
    var color = randomColor();
    var size = randomSize();
    element.style.backgroundColor = color;
    element.style.width = "".concat(size, "px");
    element.style.height = "".concat(size, "px");
  }
} //function randomSize(){}


function randomColor() {
  return "rgb(".concat(Math.floor(Math.random() * 255), ", ").concat(Math.floor(Math.random() * 255), ",").concat(Math.floor(Math.random() * 255), ")");
}

function randomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

function randomSize() {
  return Math.floor(Math.random() * 160 + 40);
}