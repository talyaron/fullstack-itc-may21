"use strict";

boxesNum();

function boxesNum() {
  try {
    var body = document.querySelector("body");
    var bodyHtmlCode = '';
    var howManyBoxes = Math.ceil(Math.random() * 10);

    for (var i = 1; i < howManyBoxes; i++) {
      bodyHtmlCode += "<div style='".concat(boxSize() + boxColor(), "'></div>");
    }

    body.innerHTML = bodyHtmlCode;
  } catch (e) {
    return e;
  }
}

function boxSize() {
  var boxHeight = Math.ceil(Math.random() * 160) + 40;
  var boxWidth = Math.ceil(Math.random() * 160) + 40;
  return "height:".concat(boxHeight, "px; width:").concat(boxWidth, "px;");
}

function boxColor() {
  var boxColor = "rgb(".concat(Math.ceil(Math.random() * 255), ",").concat(Math.ceil(Math.random() * 255), ",").concat(Math.ceil(Math.random() * 255), ")");
  return "background-color:".concat(boxColor, ";");
}