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


 
box.addEventListener("mouseout",(e) => {
    boxChange = e.target;
    boxChange.src =`https://www.thesprucepets.com/thmb/MysS9-nXni5Mq53c4H3l7lxLJ8U=/1936x1089/smart/filters:no_upscale()/AmericanPitBullTerrierMoniqueRodriguez-be4b597e914e46f084adbe5f0a2a9ccc.jpg`;
});
box.addEventListener("mouseover",(e) => {
    boxChange2= e.target;
    boxChange2.src =`https://images.unsplash.com/photo-1576434795764-7e27901b7af3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80`;
    });

const moveRight = () => {
  mLeft += move;
  box.style.marginLeft = `${mLeft}px`;                                            /*YS: Very nice job of splitting your code into functions. Remeber DRY (dont repeat yourself) - all of these code-blocks are very similar, so it would
                                                                                  be better to create another function that accepts different parameters: const moveDog = (move, direction, rotate) = {} 
                                                                                  and call that function 4 times.*/
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
