"use strict";

var generatePosition = function generatePosition() {
  var divPosition = "transform: translate(".concat(Math.ceil(Math.random() * 1000), "px, ").concat(Math.ceil(Math.random() * 80), "px);");
  return divPosition;
};

var moveBox = document.querySelector('.moveBox');
moveBox.addEventListener('click', function () {
  console.log(moveBox);
});