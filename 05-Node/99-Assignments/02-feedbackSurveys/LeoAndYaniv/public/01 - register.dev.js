"use strict";

//Handle the form to create a new user:
var handleFormCreate = document.querySelector("#createForm");
handleFormCreate.addEventListener('submit', doingSubmitCreate);

function doingSubmitCreate(ev) {
  var _errorMessage, _ev$target$elements, username, email, password, passwordVerify, passRegExRule, passRegEx, userDetails, userCreated;

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
          _ev$target$elements = ev.target.elements, username = _ev$target$elements.username, email = _ev$target$elements.email, password = _ev$target$elements.password, passwordVerify = _ev$target$elements.passwordVerify;
          username = username.value;
          email = email.value;
          password = password.value;
          passwordVerify = passwordVerify.value;

          if (!(!username || !email || !password)) {
            _context.next = 12;
            break;
          }

          throw new Error("Please complete all the fields");

        case 12:
          passRegExRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/;
          passRegEx = new RegExp(passRegExRule, 'gm');

          if (passRegEx.test(password)) {
            _context.next = 17;
            break;
          }

          alert('Your password must contain 6-8 characters, at least one uppercase letter, one lowercase letter, one number and one special character. Please try again');
          throw new Error('Password not secured enough');

        case 17:
          if (!(password != passwordVerify)) {
            _context.next = 20;
            break;
          }

          alert('Your entered different passwords, please try again');
          throw new Error('Password verification failed');

        case 20:
          ev.target.reset();
          userDetails = {
            username: username,
            email: email,
            password: password
          };
          _context.next = 24;
          return regeneratorRuntime.awrap(axios.post('/user/register', userDetails));

        case 24:
          userCreated = _context.sent;

          if (userCreated.data.user != null) {
            location.href = "03- surveys.html?email=".concat(userCreated.data.user.email);
          } else {
            _errorMessage.innerHTML = userCreated.data.message;
          }

          _context.next = 32;
          break;

        case 28:
          _context.prev = 28;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          errorMessage.innerHTML = _context.t0;

        case 32:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 28]]);
}

;