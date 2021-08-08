"use strict";

function getInfoInConsole() {
  var data;
  return regeneratorRuntime.async(function getInfoInConsole$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get('/getData'));

        case 3:
          data = _context.sent;
          console.log(data);
          return _context.abrupt("return", data);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}

getInfoInConsole();