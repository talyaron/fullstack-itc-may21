"use strict";

//Recreate everything every 5 seconds
setInterval(function () {
  randomBoxes();
  ;
}, 5000); //randomBoxes();

function randomBoxes() {
  try {
    boxes = Math.floor(Math.random() * 10 + 1); //body

    var colorBody = randomColor();
    document.body.style.background = "".concat(colorBody); //h1

    var colorh1 = randomHColor();
    var h1 = document.querySelector('.myh1id');
    h1.innerHTML = "Number of boxes: ".concat(boxes);
    var fontsize = randomFontsize();
    h1.style.color = "".concat(colorh1);
    h1.style.fontSize = "".concat(fontsize, "px"); //container

    var container = document.querySelector('.container'); //clean container

    container.innerHTML = " "; //create divs and changes their style

    for (var i = 0; i < boxes; i++) {
      var color = randomColor();
      var borderColor = randomBorderColor();
      var size = randomSize();
      var top = randomPositionTop();
      var left = randomPositionLeft();
      var spin = randomSpin();
      container.innerHTML += "<div style=\"background-color:".concat(color, "; width:").concat(size, "px; height:").concat(size, "px;\n                                        position:relative; top:").concat(top, "px; left:").concat(left, "px; \n                                        margin:0 auto; border:5px solid ").concat(borderColor, "; animation: spin ").concat(spin, "ms \n                                        infinite linear\">\n                                        <p>Box ").concat(i + 1, "</p></div>");
    }
  } catch (e) {
    console.log(e);
  }
}