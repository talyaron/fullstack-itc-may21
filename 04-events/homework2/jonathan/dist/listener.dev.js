"use strict";

document.addEventListener('keyup', function (ev) {
  console.log(ev.key);

  switch (ev.key) {
    case "ArrowLeft":
      character.moveLeft();
      break;

    case "ArrowRight":
      character.moveRight();
      break;

    case "ArrowDown":
      character.moveDown();
      break;

    case "ArrowUp":
      character.moveUp();
      break;

    default:
  }
});