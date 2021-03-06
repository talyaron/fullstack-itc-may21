"use strict";

//Handle the form to create a new user:
var handleFormCreate = document.querySelector("#createForm");
handleFormCreate.addEventListener('submit', doingSubmitCreate);

function doingSubmitCreate(ev) {
  var _ev$target$elements, username, email, password, info;

  return regeneratorRuntime.async(function doingSubmitCreate$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          ev.preventDefault();
          _ev$target$elements = ev.target.elements, username = _ev$target$elements.username, email = _ev$target$elements.email, password = _ev$target$elements.password;
          username = username.value;
          email = email.value;
          password = password.value;

          if (!(!username || !email || !password)) {
            _context.next = 8;
            break;
          }

          throw new Error("Please complete all the fields");

        case 8:
          info = {
            username: username,
            email: email,
            password: password
          };
          _context.next = 11;
          return regeneratorRuntime.awrap(axios.post('/register/user', info));

        case 11:
          ev.target.reset();
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 14]]);
}

;