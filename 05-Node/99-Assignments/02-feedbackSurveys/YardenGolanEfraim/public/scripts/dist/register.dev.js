"use strict";

function handleRegister(ev) {
  var username, password, email, result;
  return regeneratorRuntime.async(function handleRegister$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ev.preventDefault();
          username = ev.target.elements.username.value;
          password = ev.target.elements.password.value;
          email = ev.target.elements.email.value;
          _context.next = 6;
          return regeneratorRuntime.awrap(axios.post('/createUser', {
            username: username,
            password: password,
            email: email
          }));

        case 6:
          result = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(console.log(result));

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(alert("Register succesful, ".concat(username, "!")));

        case 11:
          ev.target.reset();

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}