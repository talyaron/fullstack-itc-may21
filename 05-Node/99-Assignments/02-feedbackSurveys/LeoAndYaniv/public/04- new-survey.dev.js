"use strict";

var root = document.querySelector('#nameUser');

function getUserInfoFromCookie() {
  var userInfo, _userInfo$data$cookie, email, username;

  return regeneratorRuntime.async(function getUserInfoFromCookie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get('/register/info'));

        case 2:
          userInfo = _context.sent;
          _userInfo$data$cookie = userInfo.data.cookie, email = _userInfo$data$cookie.email, username = _userInfo$data$cookie.username;
          console.log(email, username);
          renderuserInfo(username);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

;

function renderuserInfo(username) {
  var toRender = "<h1><span class=\"nameUser__title\">".concat(username, "</span> lets create an amazing survey!</h1>");
  root.innerHTML = toRender;
}

;
var createQuestion = document.querySelector('#create');
createQuestion.addEventListener('submit', addNewQuestion);

function addNewQuestion(ev) {
  var question, url_string, url, uuid, questionsCreated;
  return regeneratorRuntime.async(function addNewQuestion$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          ev.preventDefault();
          question = ev.target.elements.question;
          question = question.value;

          if (question) {
            _context2.next = 6;
            break;
          }

          throw new Error("Please type a question");

        case 6:
          modalCreate.style.display = "none";
          ev.target.reset(); //Get the UUID from the URL

          url_string = window.location.href;
          url = new URL(url_string);
          uuid = url.searchParams.get("uuid");
          _context2.next = 13;
          return regeneratorRuntime.awrap(axios.post("/surveys/create/".concat(uuid), {
            question: question
          }));

        case 13:
          questionsCreated = _context2.sent;
          _context2.next = 19;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 16]]);
}

;