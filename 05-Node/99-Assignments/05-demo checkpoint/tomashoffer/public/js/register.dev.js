"use strict";

function handleRegister() {
  try {
    var nameDiv = document.querySelector('.form__user');
    var emailDiv = document.querySelector('.form__email');
    var passDiv = document.querySelector('.form__password');
    var colorDiv = document.querySelector('.form__color');
    var name = nameDiv.children[0].value;
    var email = emailDiv.children[0].value;
    var password = passDiv.children[0].value;
    ;
    var color = colorDiv.children[0].value;
    ;
    console.log(name, email, password, color);
    var newUser = {
      name: name,
      email: email,
      password: password,
      color: color
    };
    register(newUser);
  } catch (e) {
    console.error(e);
  }
} // QUERY SELECTORS


var btnSub = document.querySelector('.btn-submit'); // EVENTLISTENERS

btnSub.addEventListener('click', handleRegister);

function register(newUser) {
  var _ref, data, error;

  return regeneratorRuntime.async(function register$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.post('/user/register', newUser));

        case 3:
          _ref = _context.sent;
          data = _ref.data;
          error = _ref.error;

          if (!error) {
            _context.next = 8;
            break;
          }

          throw error;

        case 8:
          console.log(data); // if (response.data) {
          //     // window.location.href = "http://localhost:3000/index.html";
          //     console.log('registrado')
          // }  

          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
}