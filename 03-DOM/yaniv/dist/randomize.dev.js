"use strict";

// setInterval(function(){boxesNum1();}, 5000);
setInterval(function () {
  boxesNum2();
}, 5000); // approach 1

function boxesNum1() {
  try {
    var body = document.querySelector("body");
    /*YS: Good error handling! There are a couple of reasons why the body might not be found (doesnt mean that it doesnt have a body). 
    For example if the Javascripts loads before the HTML, it will not find the body. There are also human errors for example 'body' might
    be spelled incorrectly. */
    // debugger;
    // if (body === undefinded) { // not really possible - if not in HTML - the <body> tag is added automatically by the browser
    //     throw new Error(`What kind of a HTML document doe'st have a body?!`);
    // }

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
} // approach 2


function boxesNum2() {
  try {
    var body = document.querySelector("body");
    var howManyBoxes = Math.ceil(Math.random() * 10);
    body.innerHTML = "<div class='container'><h1>Number of boxes: ".concat(howManyBoxes, "</h1></div>");
    var newBox;

    for (var i = 1; i <= howManyBoxes; i++) {
      newBox = document.createElement("div"); //YS: What do you mean not possible to change CSS file? Here you are changing the HTML by adding an ID, it should be possible.
      // newBox.setAttribute(`id`,`box${i}`); // not possible to change css file from what I saw. Hence - redundant.

      newBox.style.height = boxHeigt2();
      newBox.style.width = boxWidth2();
      newBox.style.backgroundColor = boxColor2();
      newBox.style.top = boxTop2();
      newBox.style.left = boxLeft2();
      newBox.innerHTML = "<p>".concat(i, "</p>");
      body.appendChild(newBox);
    }
  } catch (e) {
    return e; //YS: Try to be more explicit on what the error will be. console.log('Element does not exist')
  }
}

function boxHeigt2() {
  var boxHeight = "".concat(Math.ceil(Math.random() * 160) + 40, "px");
  return boxHeight;
}

function boxWidth2() {
  var boxWidth = "".concat(Math.ceil(Math.random() * 160) + 40, "px");
  return boxWidth;
}

function boxColor2() {
  var boxBg = "rgb(".concat(Math.ceil(Math.random() * 255), ",").concat(Math.ceil(Math.random() * 255), ",").concat(Math.ceil(Math.random() * 255), ")");
  return boxBg;
}

function boxTop2() {
  var boxTop = "".concat(Math.ceil(Math.random() * 90), "vh");
  return boxTop;
}

function boxLeft2() {
  var boxLeft = "".concat(Math.ceil(Math.random() * 90), "vw");
  return boxLeft;
} // I don't really see which errors can occure here..