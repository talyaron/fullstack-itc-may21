"use strict";

// HANDLE FORM VALUES 
function handleSubmit(e) {
  e.preventDefault();
  var name = e.target.elements.name.value;
  var email = e.target.elements.email.value;
  var password = e.target.elements.password.value;
  var user = name;
  getInfo(user);
} // POST FORM VALUE 


function getInfo(user) {
  var response, data;
  return regeneratorRuntime.async(function getInfo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios('/setCookie', user));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context.sent;
          console.log(data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}