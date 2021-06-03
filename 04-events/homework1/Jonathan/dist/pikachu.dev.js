"use strict";

var pikachu = document.querySelector('.pikachu'); //ver como lograr que sea prederminado por el windows

pikachu.style.position = "relative";
pikachu.style.left = "500px";
pikachu.style.top = "200px"; //Get Position X and Y

var PositionX = parseInt(pikachu.style.left);
var PositionY = parseInt(pikachu.style.top); //Get speed of moving

var speed = 10; //Movement with the keyboard

document.addEventListener('keydown', function (ev) {
  if (ev.key == "ArrowDown") {
    pikachu.style.top = "".concat(PositionY + speed, "px");
    PositionY = parseInt(pikachu.style.top);
    pikachu.style.transform = "rotate(90deg)";
    console.log(PositionY);

    if (PositionY >= 400) {
      PositionY = 400;
      pikachu.style.transform = "rotate(270deg)";
    }
  } else if (ev.key == "ArrowUp") {
    pikachu.style.top = "".concat(PositionY - speed, "px");
    PositionY = parseInt(pikachu.style.top);
    pikachu.style.transform = "rotate(270deg)";

    if (PositionY <= 15) {
      PositionY = 15;
      pikachu.style.transform = "rotate(90deg)";
    }
  } else if (ev.key == "ArrowLeft") {
    pikachu.style.left = "".concat(PositionX - speed, "px");
    PositionX = parseInt(pikachu.style.left);
    pikachu.style.transform = "rotate(180deg)";

    if (PositionX <= 15) {
      PositionX = 15;
      pikachu.style.transform = "rotate(0deg)";
    }
  } else if (ev.key == "ArrowRight") {
    pikachu.style.left = "".concat(PositionX + speed, "px");
    PositionX = parseInt(pikachu.style.left);
    pikachu.style.transform = "rotate(0deg)";

    if (PositionX >= 1150) {
      PositionX = 1150;
      pikachu.style.transform = "rotate(180deg)";
    }
  }
}); //Mouseover

pikachu.addEventListener('mouseover', function (ev) {
  var target = ev.target;
  pikachu.setAttribute('src', 'img/pilove.gif');
}); //MouseOut

pikachu.addEventListener('mouseout', function (ev) {
  var target = ev.target;
  pikachu.setAttribute('src', 'img/piran.gif');
}); //https://www.section.io/engineering-education/keyboard-events-in-javascript/