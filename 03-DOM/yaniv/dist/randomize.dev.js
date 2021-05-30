"use strict";

boxesNum();

function boxesNum() {
  try {
    var body = document.querySelector("body");
    var bodyHtmlCode = '';
    var howManyBoxes = Math.ceil(Math.random() * 10);

    for (var i = 1; i < howManyBoxes; i++) {
      bodyHtmlCode += "<div style='".concat(boxSize() + boxColor() + boxPosition(), "'></div>");
    }

    body.innerHTML = bodyHtmlCode;
  } catch (e) {
    return e;
  }
}

function boxSize() {
  var boxHeight = "".concat(Math.ceil(Math.random() * 160) + 40, "px");
  var boxWidth = "".concat(Math.ceil(Math.random() * 160) + 40, "px");
  return "height:".concat(boxHeight, "; width:").concat(boxWidth, ";");
}

function boxColor() {
  var boxBg = "rgb(".concat(Math.ceil(Math.random() * 255), ",").concat(Math.ceil(Math.random() * 255), ",").concat(Math.ceil(Math.random() * 255), ")");
  return "background-color:".concat(boxBg, ";");
}

function boxPosition() {
  var boxHeight = "".concat(Math.ceil(Math.random() * 100), "%");
  var boxWidth = "".concat(Math.ceil(Math.random() * 100), "%");
  return "background-color:".concat(boxPosition, ";");
}