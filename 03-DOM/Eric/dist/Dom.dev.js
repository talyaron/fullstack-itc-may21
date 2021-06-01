"use strict";

//1) create on the dom a     (1-10).
//2) create them in random colors and random sizes (40px - 200px); and random positions
//3) using setInterval, recrete everything every 5 seconds.
//4) do everthing as functions.
//5) don't forget to use try-catch and try to think beforhand on the places the functions can fail.
//change boxes
createbox();
setInterval(function () {
  location.reload();
}, 5000);

function createbox() {
  var number = randomNumber();
  var h1 = document.createElement("H1");
  h1.innerText = "The boxes are: ".concat(number);
  document.body.appendChild(h1); //let h1 = document.body.createElement("h1");
  //h1.innerText= `The number is: ${number}`;
  //document.body.appendChild(h1);

  var container = document.createElement("div");
  container.className = 'container';
  document.body.appendChild(container);

  for (var i = 0; i < number; i++) {
    var element = document.createElement("div");
    container.appendChild(element);
    var color = randomColor();
    var size = randomSize();
    var position = randomPosition();
    element.style.backgroundColor = color;
    element.style.width = "".concat(size, "px");
    element.style.height = "".concat(size, "px");
    element.style.position = "relative";
    element.style.left = "".concat(position, "px");
    element.style.top = "".concat(position, "px");
  }
}

function randomColor() {
  return "rgb(".concat(Math.floor(Math.random() * 255), ", ").concat(Math.floor(Math.random() * 255), ",").concat(Math.floor(Math.random() * 255), ")");
}

function randomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

function randomSize() {
  var size = Math.floor(Math.random() * 200 + 40);
  return size;
}

function randomPosition() {
  var randomPosition = Math.floor(Math.random() * 50 + 80);
  return randomPosition;
}