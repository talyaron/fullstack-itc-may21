"use strict";

//modal
var bgModal = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');
var btnModal = document.querySelector('.container__form__form--buttons--signup'); //buttons

var btnLogin = document.querySelector('.container__form__form--buttons--login'); //form

var form = document.querySelector('.modal-bg__modal__form'); //addEventListener

btnLogin.addEventListener('click', loginUser);
btnModal.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
form.addEventListener('submit', handleSumbit);

function loginUser(ev) {
  var inputEmail, inputPassword, user, response;
  return regeneratorRuntime.async(function loginUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ev.preventDefault(); //inputs

          inputEmail = document.querySelector('.container__form__form--email').value;
          inputPassword = document.querySelector('.container__form__form--password').value;
          user = {
            email: inputEmail,
            password: inputPassword
          };
          _context.next = 6;
          return regeneratorRuntime.awrap(enterLoginPromise(user));

        case 6:
          response = _context.sent;
          alert(response.ok);
          window.location.href = 'main.html';

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
} //MODAL


function openModal(ev) {
  try {
    ev.preventDefault();
    bgModal.classList.add('bg-active');
  } catch (er) {
    console.error(er);
  }
}

function closeModal() {
  bgModal.classList.remove('bg-active');
}

function handleSumbit(ev) {
  var username, email, password, validEmail, emailReg, newUser, response, ok;
  return regeneratorRuntime.async(function handleSumbit$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          ev.preventDefault();
          username = ev.target.elements.username.value;
          email = ev.target.elements.emaillogin.value;
          password = ev.target.elements.passwordlogin.value;
          validEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
          emailReg = new RegExp(validEmail, 'gmi');

          if (emailReg.test(email)) {
            _context2.next = 9;
            break;
          }

          throw new Error('Your email is not in the correct form');

        case 9:
          newUser = {
            username: username,
            email: email,
            password: password
          };
          _context2.next = 12;
          return regeneratorRuntime.awrap(addSignUpPromise(newUser));

        case 12:
          response = _context2.sent;
          ok = response.ok;
          alert(ok);
          bgModal.classList.remove('bg-active');
          ev.target.elements.reset();
          _context2.next = 22;
          break;

        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 22:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 19]]);
} //PROMISE


function addSignUpPromise(newUser) {
  return new Promise(function (resolve, reject) {
    fetch('/signUpUser', {
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

function enterLoginPromise(newUser) {
  return new Promise(function (resolve, reject) {
    fetch('/loginUser', {
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
} //