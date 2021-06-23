"use strict";

/* 1) create on the dom a random number of boxes (1-10).
2) create them in random colors and random sizes (40px - 200px), and random positions.
3) using setInterval, recrete everything every 5 seconds.
4) do everthing as functions.
5) don't forget to use try-catch and try to think beforhand on the places the functions can fail.
 */
//Define variables:
var buttonStart = document.getElementById('start');
var buttonStop = document.getElementById('stop');
var buttonCycle = setInterval(createBoxes, 5000); //Add event listeners when I click on the buttons:

buttonStart.addEventListener('click', function () {
  buttonCycle = setInterval(createBoxes, 5000);
});
buttonStop.addEventListener('click', function () {
  clearInterval(buttonCycle);
}); //Create boxes:

function createBoxes() {
  try {
    var num = randomNumber();
    var container = document.getElementById("container");
    /* If I leave the following line uncommented it will remove the old boxes and replace them. If it´s commented it will continue adding boxes:
    
    container.innerHTML = ''; */

    for (var i = 0; i < num; i++) {
      var element = document.createElement("div");
      container.appendChild(element);
      element.style.backgroundColor = randomColor();
      element.style.width = randomSize();
      element.style.height = randomSize();
      element.style.position = randomPosition();
      element.style.border = randomBorder();
      element.style.borderRadius = randomRadius();
    }

    document.body.style.backgroundColor = randomColor();
  } catch (e) {
    console.error();
  }
} //It was difficult to add try and catch because I didn´t know what error the application could have, because the user almost not interact with the page