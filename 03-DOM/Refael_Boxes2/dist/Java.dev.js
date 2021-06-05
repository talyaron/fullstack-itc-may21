"use strict";

var container = document.querySelector(".container");
console.log(container);

var boxes = function boxes() {
  try {
    if (randomNum === 0 || randomNum > 10) throw new Error("Number of boxes is incorrect!");
    if (randomSize < 40 || randomSize > 200) throw new Error("Width & Height are incorrect!");
    var random = randomNum();

    for (var i = 0; i < random; i++) {
      var myDiv = document.createElement("div");
      myDiv.style.position = "relative";
      myDiv.style.backgroundColor = randomColor();
      myDiv.style.width = randomSize();
      myDiv.style.height = randomSize();
      myDiv.style.left = randomPositionLeft();
      myDiv.style.top = randomPositionTop();
      container.appendChild(myDiv);
      console.dir(myDiv);
    }
  } catch (error) {
    console.log(error);
  }
}; // setInterval(function () {
//   document.location.reload();
// }, 5000);


boxes();