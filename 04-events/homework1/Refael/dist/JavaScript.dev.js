"use strict";

// create an image of your favorite animal (or whatever).
// put it in the middle of the screen
// move the image with the keyboard key arrow.
// if you move it up, the image should look up, etc...
// extra:
// if the cursor moves over the image a surprise image appear
var wormDiv = document.querySelector(".worm");
console.dir(wormDiv);
wormDiv.style.left = "350px";
wormDiv.style.top = "250px";
wormDiv.style.bottom = "0px";
wormDiv.style.right = "0px";
wormDiv.addEventListener("onkeyup", function (ev) {
  if (ev.KeyCode === 40) {
    console.log(ev);
    wormDiv.innerText = ev.key;
  }
}); // const container = document.querySelector(".container");
// console.log(container);
// const game = () => {
//   const wormDiv = document.createElement("div");
//   const
//   container.appendChild(wormDiv);
//   //   wormDiv.style.backgroundImage =  ;w
//   wormDiv.style.height = "50px";
//   wormDiv.style.width = "50px";
// };
// game();