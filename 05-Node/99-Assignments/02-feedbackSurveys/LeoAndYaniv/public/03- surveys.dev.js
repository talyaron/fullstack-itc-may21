"use strict";

var root = document.querySelector('#nameUser');

function getUserInfoFromCookie() {
  var userInfo, username;
  return regeneratorRuntime.async(function getUserInfoFromCookie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get('/register/info'));

        case 2:
          userInfo = _context.sent;
          username = userInfo.data.cookie.username;
          renderuserInfo(username);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

;

function renderuserInfo(username) {
  var toRender = "<h1>Welcome <span class=\"nameUser__title\">".concat(username, "</span></h1>");
  root.innerHTML = toRender;
}

;
var redirectButton = document.querySelector('#redirect');
redirectButton.addEventListener('click', createSurvey);

function createSurvey() {
  var url_string, url, email, idSurveyCreated;
  return regeneratorRuntime.async(function createSurvey$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          url_string = window.location.href;
          url = new URL(url_string);
          email = url.searchParams.get("email");
          _context2.next = 6;
          return regeneratorRuntime.awrap(axios.post("/surveys/createSurvey/".concat(email)));

        case 6:
          idSurveyCreated = _context2.sent;
          window.location.href = "./04- new-survey.html?uuid=".concat(idSurveyCreated.data.survey.uuid);

          if (window.location.href) {
            _context2.next = 10;
            break;
          }

          throw new Error('The page where you want to redirect it doesn´t exist!');

        case 10:
          _context2.next = 15;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

;