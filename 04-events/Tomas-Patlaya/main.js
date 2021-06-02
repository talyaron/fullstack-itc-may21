const box = document.querySelector(".box");

function randomsPosition() {
  let randomPosition = Math.floor(Math.random() * 500);
  return randomPosition;
}



function boxPositions() {
    let positions = randomsPosition();

    box.style.position = "relative";
    box.style.left = `${positions}px`;
    box.style.top = `${positions}px`;
}


box.addEventListener('mouseover',boxPositions);

window.addEventListener('load',boxPositions);


