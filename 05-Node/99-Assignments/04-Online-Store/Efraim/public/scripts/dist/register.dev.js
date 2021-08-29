"use strict";

function handleRegister(ev) {
  var email, password, repassword, result;
  return regeneratorRuntime.async(function handleRegister$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ev.preventDefault();
          _context.prev = 1;
          email = ev.target.elements.email.value;
          password = ev.target.elements.password.value;
          repassword = ev.target.elements.repassword.value;
          _context.next = 7;
          return regeneratorRuntime.awrap(axios.post('/publicUsers/addUser', {
            email: email.toLowerCase(),
            password: password,
            repassword: repassword,
            role: "public"
          }));

        case 7:
          result = _context.sent;
          console.log(result.data);

          if (result.data === "Register Succesful!") {
            alert("".concat(result.data, " ").concat(email));
          } else {
            alert("Email taken or Passwords don't match!");
          }

          ev.target.reset();
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

document.querySelector(".form-field").addEventListener("submit", handleRegister);