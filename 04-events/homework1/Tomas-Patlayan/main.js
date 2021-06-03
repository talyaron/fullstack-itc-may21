const box = document.querySelector(".box");
let mLeft = 0;
let mTop = 0;
let move = 10;
let rotateRight= 90;
let rotateLeft= 270;
let rotateUp = 360;
let rotateDown =180;


document.addEventListener("keydown", (e) => {
  if (e.keyCode == "39") {
    moveRight();
  }
  if (e.keyCode == "37") {
    moveLeft();
  }
  if (e.keyCode == "38") {
    moveUp();
  }

  if (e.keyCode == "40") {
    moveDown();
  }
});

const moveRight = () => {
  mLeft += move;
  box.style.marginLeft = `${mLeft}px`;
  box.style.transform =`rotate(${rotateRight}deg)`;
};

const moveLeft = () => {
  mLeft -= move;
  box.style.marginLeft = `${mLeft}px`;
  box.style.transform =`rotate(${rotateLeft}deg)`;
};

const moveUp = () => {
  mTop -= move;
  box.style.marginTop = `${mTop}px`;
  box.style.transform =`rotate(${rotateUp}deg)`;
};

const moveDown = () => {
  mTop += move;
  box.style.marginTop = `${mTop}px`;
  box.style.transform =`rotate(${rotateDown}deg)`;
};
