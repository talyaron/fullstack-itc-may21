"use strict";

//log information
function handleRegister(event) {
  var name, password, newUser, response;
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
          console.log(newUser);
          _context.next = 7;
          return regeneratorRuntime.awrap(registerPromise(newUser));

        case 7:
          response = _context.sent;
          alert(response.data);
          console.log(response);
          event.target.reset();

        case 11:
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

          inputName = document.querySelector(".nameLogIn").value;
          inputPassword = document.querySelector(".passwordLogIn").value;
          user = {
            email: inputName,
            password: inputPassword
          };
          _context2.next = 6;
          return regeneratorRuntime.awrap(signInPromise(user));

        case 6:
          response = _context2.sent;
          alert(response.data);
          window.location.href = "page2.html";

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function registerPromise(newUser) {
  var response;
  return regeneratorRuntime.async(function registerPromise$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(axios.post('/signUp', newUser));

        case 2:
          response = _context3.sent;
          console.log(response.data);
          return _context3.abrupt("return", response.data);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function signInPromise(user) {
  var response;
  return regeneratorRuntime.async(function signInPromise$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(axios.post('/loginUser', user));

        case 2:
          response = _context4.sent;
          return _context4.abrupt("return", response.data);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function getCookies(ev) {
  var response, data, root;
  return regeneratorRuntime.async(function getCookies$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          ev.preventDefault();
          _context5.next = 3;
          return regeneratorRuntime.awrap(axios.get("/getCookie"));

        case 3:
          response = _context5.sent;
          data = response.data;
          root = document.querySelector("#root");
          root.innerHTML = "<p>Hello ".concat(data, ", welcome");

        case 7:
        case "end":
          return _context5.stop();
      }
    }
  });
}