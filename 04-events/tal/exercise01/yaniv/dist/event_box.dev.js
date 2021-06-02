"use strict";

// create a box, and put it in a random place on the screen.
creatBox();

function creatBox() {
  try {
    var body = document.querySelector("body");
    var bodyHtmlCode = "<div class='box' style='".concat(boxPosition(), "'><p>Catch me if you can!!</p></div>");
    body.innerHTML = bodyHtmlCode;
  } catch (e) {
    return e;
  }
}

function boxPosition() {
  var boxTop = "".concat(Math.ceil(Math.random() * 90), "vh");
  var boxLeft = "".concat(Math.ceil(Math.random() * 90), "vw");
  return "top:".concat(boxTop, ";left:").concat(boxLeft, ";");
} // every time an event on the object (of your chosing happen), move it to a new random place on the screen.
// https://www.w3schools.com/jsref/dom_obj_event.asp


var box = document.querySelector('.box');
box.addEventListener('mouseenter', function (event) {
  creatBox();
});