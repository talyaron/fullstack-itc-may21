const downKeys = new Set();
let x = 0;
let y = 0;
const dot = document.querySelector(".dot");
console.dir(dot);
document.addEventListener("keydown", (ev) => downKeys.add(ev.key));
document.addEventListener("keyup", (ev) => downKeys.delete(ev.key));

function movingDot() {
  try {
    function isDown(key) {
      return downKeys.has(key);
    }
    const run = isDown("Shift") ? 5 : 1;

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
