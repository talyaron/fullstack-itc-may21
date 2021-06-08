"use strict";

// //create an image of your favorite animal (or whatever).
// put it in the middle of the screen
// move it with the arrow on the screen.
// if you move it up, the image should look up, etc..
// extra:
// if the cursor moves over the image a surprise image appear
try {
  var _car = document.querySelector("#car");
  /*if(!car) throw new Error() */


  throw new Error("Item Doesn't Exist"); //YS: Missing the conditional statement: if(!car) throw new Error(`Item Doesn't Exist`)
} catch (error) {
  console.error("caught"); ///YS: console.log(error.message) instead of console.log("caught")
}

console.dir(car);
car.addEventListener("mouseover", function (eve) {
  car.style.border = "blue dashed 20px";
});
car.addEventListener("mouseout", function (eve) {
  car.style.border = "red dashed 2px";
});
var banner = document.querySelector(".banner");
banner.addEventListener("mouseover", function (eve) {
  banner.style.background = "yellow";
});
banner.addEventListener("mouseout", function (eve) {
  banner.style.background = "black";
});
var moveBy = 10;
window.addEventListener("load", function () {
  car.style.position = "relative";
  car.style.left = 0;
  car.style.top = 0;
  car.style.transform = "rotate(0deg)";
});
window.addEventListener("keydown", function (e) {
  //YS: Why not also change the car's direction ( look up <transform: tranlsate> in CSS) 
  switch (e.key) {
    case "ArrowLeft":
      car.style.left = parseInt(car.style.left) - moveBy + "px";
      break;

    case "ArrowRight":
      car.style.left = parseInt(car.style.left) + moveBy + "px";
      break;

    case "ArrowUp":
      car.style.top = parseInt(car.style.top) - moveBy + "px";
      break;

    case "ArrowDown":
      car.style.top = parseInt(car.style.top) + moveBy + "px";
      break;
  }
}); //YS: Nice work! 

var plusTwenty = function plusTwenty() {
  //YS: Please dont leave practice code in your work. 
  return +20;
};

console.log(plusTwenty);