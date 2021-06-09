const downKeys = new Set();
let x = 0;
let y = 0;
const dot = document.querySelector(".dot");
const piece = document.getElementsByClassName("piece");

document.addEventListener("keydown", (ev) => downKeys.add(ev.key));
document.addEventListener("keyup", (ev) => downKeys.delete(ev.key));

function movingDot() {
  const piece = document.querySelector(".piece");
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
    if (isDown("s")) {
      piece.style.top = (y += run) * 4 + "px";
    }
    if (isDown("w")) {
      piece.style.top = (y -= run) * 4 + "px";
    }
    if (isDown("d")) {
      piece.style.left = (x += run) * 4 + "px";
    }
    if (isDown("a")) {
      piece.style.left = (x -= run) * 4 + "px";
    }
  } catch (error) {
    console.log(error);
  }

  window.requestAnimationFrame(movingDot);
}
window.requestAnimationFrame(movingDot);

function formGetData(ev) {
  ev.preventDefault();
  console.dir(ev.target.children);
  let n = ev.target.children.name.value;
  let i = ev.target.children.image.value;
  let x = ev.target.children.posx.value;
  let y = ev.target.children.posy.value;
  const object1 = new GamePiece(`#${n}`, `${i}`, "100px", {
    x: `${x}`,
    y: `${y}`,
  });
  ev.target.reset();
}

//I used some of Tal's example from class
class GamePiece {
  constructor(pieceId, imageUrl, width = "50px", postion) {
    try {
      if (typeof postion !== "object")
        throw new Error("postion is not an object");
      if (!("x" in postion) || !("y" in postion))
        throw new Error("starting point should have this format {x:0, y:0}");

      this.width = width;
      this.pieceId = pieceId;
      this.imageUrl = imageUrl;
      this.postion = {};
      this.postion.x = postion.x;
      this.postion.y = postion.y;
      this.boardGame = document.querySelector("#boardGame");
      this.createPeice();
    } catch (e) {
      console.error(e);
    }
  }

  createPeice() {
    this.piece = document.createElement("img");
    this.piece.setAttribute("src", this.imageUrl);
    this.piece.setAttribute("width", this.width);
    this.piece.classList.add("piece");
    this.piece.style.left = `${this.postion.x}%`;
    this.piece.style.top = `${this.postion.y}%`;
    this.boardGame.appendChild(this.piece);
  }
}
