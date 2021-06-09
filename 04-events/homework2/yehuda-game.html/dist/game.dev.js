"use strict";

document.addEventListener('keyup', function (ev) {
  console.log(ev.key);

  switch (ev.key) {
    case "ArrowLeft":
      pig.moveLeft();
      break;

    case "ArrowRight":
      pig.moveRight();
      break;

    case "ArrowDown":
      pig.moveDown();
      break;

    case "ArrowUp":
      pig.moveUp();
      break;

    case "a":
      rainbow.moveLeft();
      break;

    case "d":
      rainbow.moveRight();
      break;

    case "w":
      rainbow.moveUp();
      break;

    case "x":
      rainbow.moveDown();
      break;
  }
});