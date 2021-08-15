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
          return regeneratorRuntime.awrap(axios.post('/users', {
            username: username,
            password: password,
            email: email
          }));

        case 6:
          result = _context.sent;

          if (result.data === "Email already taken!") {
            alert("".concat(result.data));
          } else {
            alert("Register succesful, ".concat(username, "!"));
          }

          console.log(result);
          ev.target.reset();

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}