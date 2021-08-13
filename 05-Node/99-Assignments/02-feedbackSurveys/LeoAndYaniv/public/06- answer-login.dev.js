"use strict";

//Get the UUID from the URL
var url_string = window.location.href;
var url = new URL(url_string);
var uuid = url.search.substring(1); //Handle the form to login an existing user:

var handleFormCreate = document.querySelector("#existingForm");
handleFormCreate.addEventListener('submit', doingSubmitLogin);

function doingSubmitLogin(ev) {
  var _errorMessage, _ev$target$elements, username, email, userInfo;

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
          _ev$target$elements = ev.target.elements, username = _ev$target$elements.username, email = _ev$target$elements.email;
          username = username.value;
          email = email.value;

          if (!(!username || !email)) {
            _context.next = 10;
            break;
          }

          throw new Error("Please complete all the fields");

        case 10:
          ev.target.reset();
          userInfo = {
            username: username,
            email: email
          };

          if (!userInfo) {
            _context.next = 18;
            break;
          }

          _context.next = 15;
          return regeneratorRuntime.awrap(axios.post('/user/answerLogin', userInfo));

        case 15:
          location.href = "07- answer-survey.html?uuid=".concat(uuid);
          _context.next = 19;
          break;

        case 18:
          throw new Error('Some of the fields are wrong, please try again!');

        case 19:
          _context.next = 25;
          break;

        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          errorMessage.innerHTML = _context.t0;

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 21]]);
}

;