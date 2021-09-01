"use strict";

var form = document.querySelector('.my-login-validation').addEventListener('submit', loginUser);

function loginUser(ev) {
  var email, password, user, currentUser;
  return regeneratorRuntime.async(function loginUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ev.preventDefault();
          email = ev.target.elements.email.value;
          password = ev.target.elements.password.value;
          user = {
            email: email,
            password: password
          };
          _context.next = 6;
          return regeneratorRuntime.awrap(enterLogin(user));

        case 6:
          currentUser = _context.sent;
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          window.location.href = "store.html";

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}

function enterLogin(userLogin) {
  return new Promise(function (resolve, reject) {
    fetch('/user/userLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userLogin)
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