//This is the "creat new player" function

function formGetData(ev) {
  ev.preventDefault();
  console.dir(ev.target.children);
  let n = ev.target.children.name.value;
  let i = ev.target.children.image.value;
  let x = ev.target.children.posx.value;
  let y = ev.target.children.posy.value;
  const object1 = new GamePiece(`#${n}`, `${i}`, "50px", {
    x: `${x}`,
    y: `${y}`,
  });
  ev.target.reset();
}

//I used some of Tal's example from class
class GamePiece {
  constructor(pieceId, imageUrl, width = "30px", postion) {
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
      this.container = document.querySelector(".container");
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
    this.piece.style.left = `${this.postion.x}px`;
    this.piece.style.top = `${this.postion.y}px`;
    this.container.appendChild(this.piece);
  }
}

const dotGame = () => {
  // const piece = document.querySelector(".piece");
  const dot = document.querySelector(".dot");
  dot.style.left = `${window.innerWidth / 2 - 50}px`;
  dot.style.top = `${window.innerHeight / 2 - 50}px`;

  document.addEventListener("keydown", (ev) => {
    const dot = document.querySelector(".dot");
    const move = 10;
    let dotUp = dot.style.top;
    let dotLeft = dot.style.left;
    let dotUpNum = Number(dotUp.replace("px", ""));
    let dotLeftNum = Number(dotLeft.replace("px", ""));

    //This is the actuall game function which moves the players around
    if (ev.key === "ArrowDown") {
      dot.style.content =
        "url(/02-JavaScript/03-events/homework2/Refael_secondAttampt/images/dot__down.png)";
      dotUpNum += move;
      dotUp = `${dotUpNum}px`;
      dot.style.top = dotUp;
      dot.addEventListener("mouseenter", (ev) => {
        dot.style.content =
          "url(/02-JavaScript/03-events/homework2/Refael_secondAttampt/images/dot__down-hover.png)";
      });
      if (dot.style.top === "378.5px") {
        dotUpNum -= move;
        dotUp = `${dotUpNum}px`;
        dot.style.top = dotUp;
      }
    }
    if (ev.key === "ArrowUp") {
      dot.style.content =
        "url(/02-JavaScript/03-events/homework2/Refael_secondAttampt/images/dot__up.png)";
      dotUpNum -= move;
      dotUp = `${dotUpNum}px`;
      dot.style.top = dotUp;
      if (dot.style.top === "8.5px") {
        dotUpNum += move;
        dotUp = `${dotUpNum}px`;
        dot.style.top = dotUp;
      }
      dot.addEventListener("mouseenter", (ev) => {
        dot.style.content =
          "url(/02-JavaScript/03-events/homework2/Refael_secondAttampt/images/dot__up-hover.png)";
      });
    }
    if (ev.key === "ArrowLeft") {
      dot.style.content =
        "url(/02-JavaScript/03-events/homework2/Refael_secondAttampt/images/dot__left.png)";
      dotLeftNum -= move;
      dotLeft = `${dotLeftNum}px`;
      dot.style.left = dotLeft;

      if (dot.style.left === "3px") {
        dotLeftNum += move;
        dotLeft = `${dotLeftNum}px`;
        dot.style.left = dotLeft;
      }
      dot.addEventListener("mouseenter", (ev) => {
        dot.style.content =
          "url(/02-JavaScript/03-events/homework2/Refael_secondAttampt/images/dot__left-hover.png)";
      });
    }
    if (ev.key === "ArrowRight") {
      dot.style.content =
        "url(/02-JavaScript/03-events/homework2/Refael_secondAttampt/images/dot__right.png)";
      dotLeftNum += move;
      dotLeft = `${dotLeftNum}px`;
      dot.style.left = dotLeft;
      console.log(dotLeft);
      if (dot.style.left === "1023px") {
        dotLeftNum -= move;
        dotLeft = `${dotLeftNum}px`;
        dot.style.left = dotLeft;
      }
      dot.addEventListener("mouseenter", (ev) => {
        dot.style.content =
          "url(/02-JavaScript/03-events/homework2/Refael_secondAttampt/images/dot__right-hover.png)";
      });
    }
  });
};
const pieceGame = () => {
  document.addEventListener("keydown", (ev) => {
    const piece = document.querySelector(".piece");
    const move = 10;
    let pieceUp = piece.style.top;
    let pieceLeft = piece.style.left;
    let pieceUpNum = Number(pieceUp.replace("px", ""));
    let pieceLeftNum = Number(pieceLeft.replace("px", ""));
    if (ev.key === "s") {
      pieceUpNum += move;
      pieceUp = `${pieceUpNum}px`;
      piece.style.top = pieceUp;
      if (piece.style.top === "290px") {
        pieceUpNum -= move;
        pieceUp = `${pieceUpNum}px`;
        piece.style.top = pieceUp;
      }
    }
    if (ev.key === "w") {
      pieceUpNum -= move;
      pieceUp = `${pieceUpNum}px`;
      piece.style.top = pieceUp;
      console.log(pieceUp);
      if (piece.style.top === "-40px") {
        pieceUpNum += move;
        pieceUp = `${pieceUpNum}px`;
        piece.style.top = pieceUp;
      }
    }
    if (ev.key === "d") {
      pieceLeftNum += move;
      pieceLeft = `${pieceLeftNum}px`;
      piece.style.left = pieceLeft;
      if (piece.style.left === "1000px") {
        pieceLeftNum -= move;
        pieceLeft = `${pieceLeftNum}px`;
        piece.style.left = pieceLeft;
      }
    }
    if (ev.key === "a") {
      pieceLeftNum -= move;
      pieceLeft = `${pieceLeftNum}px`;
      piece.style.left = pieceLeft;
      if (piece.style.left === "20px") {
        pieceLeftNum += move;
        pieceLeft = `${pieceLeftNum}px`;
        piece.style.left = pieceLeft;
      }
    }
  });
};
dotGame();
pieceGame();
