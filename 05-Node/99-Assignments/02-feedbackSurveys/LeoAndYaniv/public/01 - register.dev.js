"use strict";

//Handle the form to create a new user:
var handleFormCreate = document.querySelector("#createForm");
handleFormCreate.addEventListener('submit', doingSubmitCreate);

function doingSubmitCreate(ev) {
  var _errorMessage, _ev$target$elements, username, email, password, userInfo, userCreated;

  return regeneratorRuntime.async(function doingSubmitCreate$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _errorMessage = document.querySelector('#errorMessage');

          if (_errorMessage) {
            _context.next = 4;
            break;
          }

          throw new Error('There is a problem findind the container for the error message');

        case 4:
          ev.preventDefault();
          _ev$target$elements = ev.target.elements, username = _ev$target$elements.username, email = _ev$target$elements.email, password = _ev$target$elements.password;
          username = username.value;
          email = email.value;
          password = password.value;

          if (!(!username || !email || !password)) {
            _context.next = 11;
            break;
          }

          throw new Error("Please complete all the fields");

        case 11:
          ev.target.reset();
          userInfo = {
            username: username,
            email: email,
            password: password
          };
          _context.next = 15;
          return regeneratorRuntime.awrap(axios.post('/user/create', userInfo));

        case 15:
          userCreated = _context.sent;

          if (userCreated.data.user != null) {
            location.href = "03- surveys.html?email=".concat(userCreated.data.user.email);
          } else {
            _errorMessage.innerHTML = userCreated.data.message;
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