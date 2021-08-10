"use strict";

//Handle the form to login an existing user:
var handleFormCreate = document.querySelector("#existingForm");
handleFormCreate.addEventListener('submit', doingSubmitLogin);

function doingSubmitLogin(ev) {
  var _errorMessage, _ev$target$elements, email, password, userInfo, userLogin;

  return regeneratorRuntime.async(function doingSubmitLogin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _errorMessage = document.querySelector('#errorMessage');

          if (_errorMessage) {
            _context.next = 4;
            break;
          }

          throw new Error('There is a problem finding the container for the error message');

        case 4:
          ev.preventDefault();
          _ev$target$elements = ev.target.elements, email = _ev$target$elements.email, password = _ev$target$elements.password;
          email = email.value;
          password = password.value;

          if (!(!email || !password)) {
            _context.next = 10;
            break;
          }

          throw new Error("Please complete all the fields");

        case 10:
          ev.target.reset();
          userInfo = {
            email: email,
            password: password
          };
          _context.next = 14;
          return regeneratorRuntime.awrap(axios.post('/register/login', userInfo));

        case 14:
          userLogin = _context.sent;
          console.log(userLogin);

          if (userLogin.data.userInfo != null) {
            location.href = "03- surveys.html";
          } else {
            _errorMessage.innerHTML = userLogin.data.message;
          }

          _context.next = 23;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          errorMessage.innerHTML = _context.t0;

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 19]]);
}

;