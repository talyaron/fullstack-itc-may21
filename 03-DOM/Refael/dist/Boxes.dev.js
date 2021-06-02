"use strict";

var Boxes = function Boxes() {
  var body = document.getElementsByTagName("body")[0];
  var canvas = document.createElement("canvas");
  var filling = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var random = Math.floor(Math.random() * (10 - 1)) + 1;

  for (var i = 0; i < random; i++) {
    var randomColor = "rgb(".concat(Math.floor(Math.random() * 256), ", ").concat(Math.floor(Math.random() * 256), ",").concat(Math.floor(Math.random() * 256), ")");
    filling.fillStyle = randomColor;
    filling.fillRect(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random() * 100 + 20, Math.random() * 100 + 20);
  }

  body.appendChild(canvas);
};

setInterval(function () {
  document.location.reload();
}, 5000);
Boxes();