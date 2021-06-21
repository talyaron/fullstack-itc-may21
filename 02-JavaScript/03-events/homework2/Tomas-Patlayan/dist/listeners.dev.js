"use strict";

document.addEventListener("keyup", function (ev) {
  switch (ev.key) {
    case "ArrowLeft":
      character.left();
      break;

    case "ArrowRight":
      character.right();
      break;

    case "ArrowDown":
      character.bottom();
      break;

    case "ArrowUp":
      character.top();
      break;

    default:
  }
});