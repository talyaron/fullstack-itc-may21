"use strict";

// //create an image of your favorite animal (or whatever).
// put it in the middle of the screen
// move it with the arrow on the screen.
// if you move it up, the image should look up, etc..
// extra:
// if the cursor moves over the image a surprise image appear
try {
  var _car = document.querySelector("#car");

  if (!_car) throw new Error("Item Doesn't Exist"); //YS: Missing the conditional statement: if(!car) throw new Error(`Item Doesn't Exist`)
} catch (error) {
  console.error(error.message); ///YS: console.log(error.message) instead of console.log("caught")
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
}); //YS: Nice work! 

var plusTwenty = function plusTwenty() {
  //YS: Please dont leave practice code in your work. 
  return +20;
};

console.log(plusTwenty);