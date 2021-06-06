"use strict";

var downKeys = new Set();
var x = 0;
var y = 0;
var dot = document.querySelector(".dot");
console.dir(dot);
document.addEventListener("keydown", function (ev) {
  return downKeys.add(ev.key);
});
document.addEventListener("keyup", function (ev) {
  return downKeys["delete"](ev.key);
});

function movingDot() {
  try {
    var isDown = function isDown(key) {
      return downKeys.has(key);
    };

    var run = isDown("Shift") ? 5 : 1;

    if (isDown("ArrowDown")) {
      dot.style.top = (y += run) * 4 + "px";
      dot.className = "dot__down";
    }

    if (isDown("ArrowUp")) {
      dot.style.top = (y -= run) * 4 + "px";
      dot.className = "dot__up";
    }

    if (isDown("ArrowRight")) {
      dot.style.left = (x += run) * 4 + "px";
      dot.className = "dot__right";
    }

    if (isDown("ArrowLeft")) {
      dot.style.left = (x -= run) * 4 + "px";
      dot.className = "dot__left";
    }
  } catch (error) {
    console.log(error);
  }

  window.requestAnimationFrame(movingDot);
}

window.requestAnimationFrame(movingDot);