"use strict";

// Send password and email to server
function handleLogin(event) {
  var password, email, result;
  return regeneratorRuntime.async(function handleLogin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          password = event.target.elements.password.value;
          email = event.target.elements.email.value;
          _context.next = 5;
          return regeneratorRuntime.awrap(axios.post('/login', {
            password: password,
            email: email
          }));

        case 5:
          result = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(console.log(result));

        case 8:
          event.target.reset();

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
} //    Go to surveys page


document.getElementById("submit").addEventListener("click", function () {
  window.location.href = "/surveylist.html";
});