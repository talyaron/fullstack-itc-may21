"use strict";

//Handle the form to create a new user:
var handleFormCreate = document.querySelector("#create");
handleFormCreate.addEventListener('submit', doingSubmitCreate);

function doingSubmitCreate(ev) {
  var _ev$target$elements, namePerson, newEmail, newPassword;

  return regeneratorRuntime.async(function doingSubmitCreate$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          ev.preventDefault();
          _ev$target$elements = ev.target.elements, namePerson = _ev$target$elements.namePerson, newEmail = _ev$target$elements.newEmail, newPassword = _ev$target$elements.newPassword;
          nameUser = namePerson.value;
          email = newEmail.value;
          password = newPassword.value;

          if (!(!nameUser || !email || !password)) {
            _context.next = 8;
            break;
          }

          throw new Error("Please complete all the fields");

        case 8:
          modalCreate.style.display = "none";
          ev.target.reset();
          _context.next = 12;
          return regeneratorRuntime.awrap(axios.post('/createUser', {
            nameUser: nameUser,
            email: email,
            password: password
          }));

        case 12:
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

; //Handle the form to login a user:

var handleFormLogin = document.querySelector("#login");
handleFormLogin.addEventListener('submit', doingSubmitLogin);

function doingSubmitLogin(ev) {
  var _errorMessage, _ev$target$elements2, _email, _password, userInfo;

  return regeneratorRuntime.async(function doingSubmitLogin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _errorMessage = document.querySelector('#errorMessage');

          if (_errorMessage) {
            _context2.next = 4;
            break;
          }

          throw new Error('There is a problem findind the container for the error message');

        case 4:
          ev.preventDefault();
          _ev$target$elements2 = ev.target.elements, _email = _ev$target$elements2.email, _password = _ev$target$elements2.password;
          _email = _email.value;
          _password = _password.value;

          if (!(!_email || !_password)) {
            _context2.next = 10;
            break;
          }

          throw new Error("Please complete all the fields");

        case 10:
          ev.target.reset();
          _context2.next = 13;
          return regeneratorRuntime.awrap(axios.post('/login', {
            email: _email,
            password: _password
          }));

        case 13:
          userInfo = _context2.sent;

          if (userInfo.data.userInfo != null) {
            location.href = "second.html";
          } else {
            _errorMessage.innerHTML = userInfo.data.message;
          }

          _context2.next = 21;
          break;

        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          errorMessage.innerHTML = _context2.t0;

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 17]]);
}

;