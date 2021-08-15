"use strict";

// Send password and email to server
function handleLogin(event) {
  var password, email, allUsers, result;
  return regeneratorRuntime.async(function handleLogin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          password = event.target.elements.password.value;
          email = event.target.elements.email.value;
          _context.next = 5;
          return regeneratorRuntime.awrap(axios.get('/users'));

        case 5:
          allUsers = _context.sent;
          console.log(allUsers.data.users.find(function (info) {
            return info.email === email;
          }));

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
          alert("login success!");
          window.location.href = "/surveylist.html";
          _context.next = 18;
          break;

        case 16:
          alert("incorrect email or password!");
          throw new Error("incorrect email or password");

        case 18:
        case "end":
          return _context.stop();
      }
    }
  });
}