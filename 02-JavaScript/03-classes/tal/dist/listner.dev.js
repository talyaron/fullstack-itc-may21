"use strict";

document.addEventListener('keyup', function (ev) {
  console.log(ev.key);

  switch (ev.key) {
    case "ArrowLeft":
      pacman.moveLeft();
      break;

    case "ArrowRight":
      pacman.moveRight();
      break;

    case "ArrowDown":
      pacman.moveDown();
      break;

    case "ArrowUp":
      pacman.moveUp();
      break;

    case "a":
      ghost.moveLeft();
      break;

    case "d":
      ghost.moveRight();
      break;

    case "w":
      ghost.moveUp();
      break;

    case "x":
      ghost.moveDown();
      break;
  }
});