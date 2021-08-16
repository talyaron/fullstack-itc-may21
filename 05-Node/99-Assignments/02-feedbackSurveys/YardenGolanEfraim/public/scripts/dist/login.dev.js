"use strict";

function handleLogin(event) {
  var password, email, allUsers, result;
  return regeneratorRuntime.async(function handleLogin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          _context.prev = 1;
          password = event.target.elements.password.value;
          email = event.target.elements.email.value;
          _context.next = 6;
          return regeneratorRuntime.awrap(axios.get('/users'));

        case 6:
          allUsers = _context.sent;

          if (!(allUsers.data.users.find(function (info) {
            return info.email === email && info.password === password;
          }) != undefined)) {
            _context.next = 16;
            break;
          }

          _context.next = 10;
          return regeneratorRuntime.awrap(axios.post('/login', {
            password: password,
            email: email
          }));

        case 10:
          result = _context.sent;
          event.target.reset();
          alert("login success!!"); //YS: How do you know it was successful?: if (result)

          window.location.href = "/surveylist.html";
          _context.next = 18;
          break;

        case 16:
          alert("incorrect email or password!");
          throw new Error("incorrect email or password");

        case 18:
          _context.next = 23;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 20]]);
}

document.querySelector('.form-field').addEventListener("submit", handleLogin);