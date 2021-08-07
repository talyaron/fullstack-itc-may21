"use strict";

function getCookies(ev) {
  var response, data, root;
  return regeneratorRuntime.async(function getCookies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ev.preventDefault();
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get('/getCookie'));

        case 3:
          response = _context.sent;
          data = response.data;
          root = document.querySelector('#root');
          root.innerHTML = "<p>Hello ".concat(data, ", welcome to our bank. Have a nice day");

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}