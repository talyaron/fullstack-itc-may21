"use strict";

var form = document.querySelector('.my-login-validation').addEventListener('submit', hundleRegister);

function hundleRegister(ev) {
  var username, email, password, newUser, currentUser;
  return regeneratorRuntime.async(function hundleRegister$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ev.preventDefault();
          username = ev.target.elements.username.value;
          email = ev.target.elements.email.value;
          password = ev.target.elements.password.value;
          newUser = {
            username: username,
            email: email,
            password: password
          };
          _context.next = 7;
          return regeneratorRuntime.awrap(addRegister(newUser));

        case 7:
          currentUser = _context.sent;
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          window.location.href = "index.html";
          ev.target.reset();

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}

function addRegister(newUser) {
  //YS: Why not use async/await here too?
  return new Promise(function (resolve, reject) {
    fetch('/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
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