"use strict";

function handleRegister(ev) {
  var username, password, email, result;
  return regeneratorRuntime.async(function handleRegister$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ev.preventDefault();
          _context.prev = 1;
          username = ev.target.elements.username.value;
          password = ev.target.elements.password.value;
          email = ev.target.elements.email.value;
          _context.next = 7;
          return regeneratorRuntime.awrap(axios.post('/users', {
            username: username,
            password: password,
            email: email
          }));

        case 7:
          result = _context.sent;

          if (result.data === "Email already taken!") {
            alert("".concat(result.data));
          } else {
            alert("Register succesful, ".concat(username, "!"));
          }

          ev.target.reset();
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 12]]);
}

document.querySelector(".form-field").addEventListener("submit", handleRegister);