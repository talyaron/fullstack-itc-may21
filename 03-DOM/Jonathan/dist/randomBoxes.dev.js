"use strict";

//import function from helpers.js

/* import { randomNumber } from 'helpers.js';
import { randomHColor } from 'helpers.js';
import { randomFontsize } from 'helpers.js';
import { randomBorderColor } from 'helpers.js';
import { randomSize } from 'helpers.js';
import { randomPositionTop } from 'helpers.js';
import { randomPositionLeft } from 'helpers.js';
import { randomSpin } from 'helpers.js'; */
//First call and then setInterval 5 seconds
randomBoxes(); //Recreate everything every 5 seconds

setInterval(function () {
  location.reload();
}, 5000); //randomBoxes();

function randomBoxes() {
  try {
    var boxes = randomNumber();
    if (boxes === 11) throw new Error('This program only allows from 1 to 10'); //body

    var colorBody = randomColor();
    document.body.style.background = "".concat(colorBody); //h1

    var colorh1 = randomHColor();
    var h1 = document.createElement('H1');
    h1.innerHTML = "Number of boxes: ".concat(boxes);
    document.body.appendChild(h1);
    var fontsize = randomFontsize();
    h1.style.color = "".concat(colorh1);
    h1.style.fontSize = "".concat(fontsize, "px"); //container
    //let container = document.querySelector('.container');

    var container = document.createElement("div");
    container.className = "container";
    document.body.appendChild(container);
    if (!container) throw new Error('The container does not exist'); //clean container
    //container.innerHTML = " ";
    //create divs and changes their style

    for (var i = 0; i < boxes; i++) {
      var color = randomColor();
      var borderColor = randomBorderColor();
      var size = randomSize();
      var top = randomPositionTop();
      var left = randomPositionLeft();
      var spin = randomSpin();
      container.innerHTML += "<div class=\"container__item\" style=\"background-color:".concat(color, "; width:").concat(size, "px; height:").concat(size, "px;position:relative; top:").concat(top, "px; left:").concat(left, "px; border:5px solid ").concat(borderColor, "; animation: spin ").concat(spin, "ms infinite linear\"><p>Box ").concat(i + 1, "</p></div>");
    }

    if (!document.querySelector('.container__item')) throw new Error('The boxes does not exist');
  } catch (e) {
    console.log(e);
  }
}