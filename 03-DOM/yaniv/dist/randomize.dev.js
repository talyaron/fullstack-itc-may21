"use strict";

setInterval(function () {
  boxesNum();
}, 5000);

function boxesNum() {
  try {
    var body = document.querySelector("body");

    if (body === undefinded) {
      throw new Error("What kind of a HTML document doe'st have a body?!");
    }

    var howManyBoxes = Math.ceil(Math.random() * 10);
    var bodyHtmlCode = "<div class='container'><h1>Number of boxes: ".concat(howManyBoxes, "</h1></div>");

    for (var i = 1; i <= howManyBoxes; i++) {
      bodyHtmlCode += "<div style='".concat(boxSize() + boxColor() + boxPosition(), "'><p>").concat(i, "</p></div>");
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
  var boxTop = "".concat(Math.ceil(Math.random() * 90), "vh");
  var boxLeft = "".concat(Math.ceil(Math.random() * 90), "vw");
  return "top:".concat(boxTop, ";left:").concat(boxLeft, ";");
} // I don't really see which errors can occure here..