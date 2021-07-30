"use strict";

function getInfo() {
  var beverage;
  return regeneratorRuntime.async(function getInfo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get('/getData'));

        case 2:
          beverage = _context.sent;
          console.log(beverage.data);
          renderBeverage(beverage);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
} //redner to the DOM


function renderBeverage(data) {
  console.log(data);
  var html = '';
  data.data.forEach(function (beverage) {
    html += "<p>".concat(beverage.name, "</p><img src=\"").concat(beverage.image, "\">");
  });
  document.getElementById('root').innerHTML = html;
}

getInfo(); // renderbeverages(beverages);