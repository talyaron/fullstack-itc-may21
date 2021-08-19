"use strict";

//Handle the form to login an existing user:
var handleFormCreate = document.querySelector("#existingForm");
handleFormCreate.addEventListener('submit', doingSubmitLogin);

function doingSubmitLogin(ev) {
  var _errorMessage, _ev$target$elements, email, password, userLoginUsername, username, userDetails, userLogin;

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
          _context.next = 13;
          return regeneratorRuntime.awrap(axios.get("/user/username/".concat(email)));

        case 13:
          userLoginUsername = _context.sent;
          username = userLoginUsername.data.username;
          userDetails = {
            username: username,
            email: email,
            password: password
          };
          _context.next = 18;
          return regeneratorRuntime.awrap(axios.post('/user/login', userDetails));

        case 18:
          userLogin = _context.sent;
          console.log(userLogin.data);

          if (userLogin.data.userExists) {
            location.href = "03- surveys.html?email=".concat(email);
          } else {
            _errorMessage.innerHTML = userLogin.data.message;
          }

          _context.next = 27;
          break;

        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          errorMessage.innerHTML = _context.t0;

        case 27:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 23]]);
}

;