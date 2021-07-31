"use strict";

//Callback hell (or promise hell)
function getWithPromise() {
  fetch('/getBeverages').then(function (r) {
    return r.json();
  }).then(function (beverages) {
    renderBeverages(beverages);
  });
}

function renderBeverages(data) {
  var html = '';
  data.forEach(function (beverage) {
    html += "\n        <div>\n        <p>".concat(beverage.name, "</p>\n        <img src=\"").concat(beverage.src, "\" alt=\"\">\n        </div>");
  });
  document.getElementById('root').innerHTML = html;
} //Calling the function


getWithPromise(); //////////////////////////////////////////////////////////
//With ASYNC - AWAIT:

function getWithAsync() {
  var r, bebidas;
  return regeneratorRuntime.async(function getWithAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('/getBeverages'));

        case 2:
          r = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(r.json());

        case 5:
          bebidas = _context.sent;
          renderBeverages1(bebidas);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
} //Calling the function


getWithAsync();

function renderBeverages1(data) {
  var html = '';
  data.forEach(function (beverage) {
    html += "\n        <div>\n        <p>".concat(beverage.name, "</p>\n        <img src=\"").concat(beverage.src, "\" alt=\"\">\n        </div>");
  });
  document.getElementById('root1').innerHTML = html;
} //////////////////////////////////////////////////////////

/* Doing the same but creating a new Promise: */
//Callback hell (or promise hell)


function getInfo() {
  var creatingAPromise;
  return regeneratorRuntime.async(function getInfo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(getWithNewPromise());

        case 2:
          creatingAPromise = _context2.sent;
          console.log(creatingAPromise);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

;

function getWithNewPromise() {
  return new Promise(function (resolve, reject) {
    fetch('/getBeverages').then(function (r) {
      return r.json();
    }).then(function (beverages) {
      resolve(beverages);
    })["catch"](function (error) {
      reject(error);
    });
  });
}

;
getInfo();