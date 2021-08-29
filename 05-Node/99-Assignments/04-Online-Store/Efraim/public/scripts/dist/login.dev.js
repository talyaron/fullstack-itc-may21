"use strict";

function handleLogin(event) {
  var password, email, res;
  return regeneratorRuntime.async(function handleLogin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          _context.prev = 1;
          password = event.target.elements.password.value;
          email = event.target.elements.email.value;
          _context.next = 6;
          return regeneratorRuntime.awrap(axios.post('/login/login', {
            password: password,
            email: email.toLowerCase()
          }));

        case 6:
          res = _context.sent;

          if (res.data.token) {
            localStorage.setItem('token', JSON.stringify(res.data.token));
          }

          event.target.reset();
          alert("login success!!");
          window.location.href = "".concat(res.data.URL);
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 13]]);
}

document.querySelector('.form-field').addEventListener("submit", handleLogin);