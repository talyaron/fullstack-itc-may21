"use strict";

var root = document.querySelector('#root');

function getUserInfoFromCookie() {
  var userInfo, _userInfo$data$cookie, email, nameUser;

  return regeneratorRuntime.async(function getUserInfoFromCookie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get('/userInfo'));

        case 2:
          userInfo = _context.sent;
          _userInfo$data$cookie = userInfo.data.cookie, email = _userInfo$data$cookie.email, nameUser = _userInfo$data$cookie.nameUser;
          renderuserInfo(email, nameUser);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

;
getUserInfoFromCookie();

function renderuserInfo(email, nameUser) {
  var toRender = "<h1>Welcome to the spy <span class=\"root__title\">".concat(nameUser, "</span></h1>\n                      <p>Soon you will receive instructions in your email <span class=\"root__title\">").concat(email, "</span></p>");
  root.innerHTML = toRender;
}

;