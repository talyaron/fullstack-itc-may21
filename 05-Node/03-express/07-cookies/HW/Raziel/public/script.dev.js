"use strict";

//log information
function handleRegister(event) {
  var name, password, newUser, response, ok;
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
          _context.next = 6;
          return regeneratorRuntime.awrap(registerPromise(newUser));

        case 6:
          response = _context.sent;
          ok = response.ok;
          alert(ok);
          event.target.reset();

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}

function handelLogIn(event) {
  var inputName, inputPassword, user, response, ok;
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
          ok = response.ok;
          alert(ok);
          window.location.href = "page2.html";

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function registerPromise(newUser) {
  return new Promise(function (resolve, reject) {
    fetch("/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(function (res) {
      if (res.status === 200 && res.ok) {
        return res.json().then(function (newUser) {
          resolve(newUser);
        });
      } else {
        return res.json().then(function (newUser) {
          alert(newUser.error);
        });
      }
    });
  });
}

function signInPromise(user) {
  return new Promise(function (resolve, reject) {
    fetch("/loginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(function (res) {
      if (res.status === 200 && res.ok) {
        return res.json().then(function (user) {
          resolve(user);
        });
      } else {
        return res.json().then(function (user) {
          alert(user.error);
        });
      }
    });
  });
}

function getCookies(ev) {
  var response, data, root;
  return regeneratorRuntime.async(function getCookies$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          ev.preventDefault();
          _context3.next = 3;
          return regeneratorRuntime.awrap(axios.get("/getCookie"));

        case 3:
          response = _context3.sent;
          data = response.data;
          root = document.querySelector("#root");
          root.innerHTML = "<p>Hello ".concat(data, ", welcome");

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
}