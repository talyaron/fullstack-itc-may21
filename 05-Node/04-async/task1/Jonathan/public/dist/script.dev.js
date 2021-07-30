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
  var beve = new getBeve();
  renderBeve(beve);
}

function getBeve() {
  return new Promise(function (resolve, reject) {
    fetch('/getBeve').then(function (r) {
      return r.json();
    }).then(function (data) {
      resolve(data);
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