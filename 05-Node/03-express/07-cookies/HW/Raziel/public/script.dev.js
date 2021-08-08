"use strict";

//log information
function handleRegister(event) {
  var name, password, newUser;
  return regeneratorRuntime.async(function handleRegister$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          name = event.target.elements.name.value;
          password = event.target.elements.password.value;
          newUser = {
            name: name,
            password: password
          };
          axios({
            method: "post",
            url: "/signUp",
            data: {
              name: name,
              password: password
            },
            headers: {
              "Content-Type": "application/json"
            }
          }).then(function (_ref) {
            var data = _ref.data;
            return renderTask(data);
          })["catch"](function (err) {
            console.log(err);
          });
          event.target.reset();

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

function handelLogIn(event) {
  var inputName, inputPassword, user, response;
  return regeneratorRuntime.async(function handelLogIn$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          event.preventDefault(); //inputs

          inputName = document.querySelector('.nameLogIn').value;
          inputPassword = document.querySelector('.passwordLogIn').value;
          user = {
            email: inputName,
            password: inputPassword
          };
          _context2.next = 6;
          return regeneratorRuntime.awrap(enterLoginPromise(user));

        case 6:
          response = _context2.sent;
          alert(response.ok);
          window.location.href = 'page2.html';

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
}