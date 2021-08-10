"use strict";

// QUERY SELECTOR 
var userTitle = document.querySelector('#title_user');
var submiBtn = document.querySelector('#submiBtn');
var logout = document.querySelector('#logout'); // EVENTLISTENERS
// submiBtn.addEventListener('click', getUserMain); 

logout.addEventListener('click', logOut); // HANDLE FORM VALUES 

function handleSubmit(e) {
  try {
    var name = e.target.elements.name.value;
    var user = name;
    getInfo(user);
  } catch (e) {
    console.error(e);
  }
} // POST FORM VALUE 


function getInfo(user) {
  var response;
  return regeneratorRuntime.async(function getInfo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios("/setCookie/".concat(user)));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
} // GET USER AND RENDER


function getUserMain() {
  var response;
  return regeneratorRuntime.async(function getUserMain$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(axios("/readCookies"));

        case 3:
          response = _context2.sent;

          if (response.data.name === undefined) {
            userTitle.innerHTML = "";
          } else {
            userTitle.innerHTML = "Welcome ".concat(response.data.name, ", you are Log In. Visit our Second Page!");
          }

          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

getUserMain(); // LOGOUT 

function logOut() {
  var response;
  return regeneratorRuntime.async(function logOut$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(axios("/removeCookie"));

        case 2:
          response = _context3.sent;
          userTitle.innerHTML = "";
          userTitle.style.border = 'none';

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}