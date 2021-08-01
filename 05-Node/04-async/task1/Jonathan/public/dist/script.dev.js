"use strict";

getBeverage(); // async function getInfo() {
//     const r = await fetch('/getBeve');
//     const beve = await r.json();
//     renderBeve(beve)
// }
// function getInfoa(){
//     fetch('/getBeve')
//     .then(r=>r.json())
//     .then(data=> renderBeve(data))
// }   

function getBeverage() {
  var beve;
  return regeneratorRuntime.async(function getBeverage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(getBeve());

        case 2:
          beve = _context.sent;
          renderBeve(beve);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getBeve() {
  return new Promise(function (resolve, reject) {
    fetch('/getBeve').then(function (r) {
      return r.json();
    }).then(function (beve) {
      resolve(beve);
    })["catch"](function (e) {
      reject(e);
    });
  });
}

function renderBeve(data) {
  var html = '';
  data.forEach(function (beve) {
    html += "<p>".concat(beve.text, "</p>\n                <img src=").concat(beve.img, " width=\"200\" height=\"200\"/>");
  });
  document.querySelector('#root').innerHTML = html;
}