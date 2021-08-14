"use strict";

//Get the UUID from the URL
var url_string = window.location.href;
var url = new URL(url_string);
var uuid = url.searchParams.get("uuid");

function getUserInfoFromCookie() {
  var userInfo, username;
  return regeneratorRuntime.async(function getUserInfoFromCookie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get('/user/info'));

        case 2:
          userInfo = _context.sent;
          username = userInfo.data.username;
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
  var loggedUser = document.querySelector('#nameUser');
  var toRender = "<h1>Ready to answer the survey, <span class=\"nameUser__title\">".concat(username, "</span>?</h1>");
  loggedUser.innerHTML = toRender;
  renderSurveyInfo();
}

; //Function to render the data of a survey in the DOM

function renderSurveyInfo() {
  var root, questionsCreated, html;
  return regeneratorRuntime.async(function renderSurveyInfo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          root = document.querySelector("#root");
          _context2.next = 3;
          return regeneratorRuntime.awrap(axios.get("/surveys/getQuestions/".concat(uuid)));

        case 3:
          questionsCreated = _context2.sent;
          html = "";
          questionsCreated.data.survey.questions.forEach(function (question) {
            html += "<div>\n        <h3>".concat(question.content, "</h3>\n        <form class=\"votation\">\n            <p class=\"raitings\">\n                <input id=\"").concat(question.uuid, "\" type=\"radio\" name=\"raiting\" value=\"5\">\n                <label for=\"").concat(question.uuid, "\">\u2605</label>\n                \n                <input id=\"").concat(question.uuid, "\" type=\"radio\" name=\"raiting\" value=\"4\">\n                <label for=\"").concat(question.uuid, "\">\u2605</label>\n                \n                <input id=\"").concat(question.uuid, "\" type=\"radio\" name=\"raiting\" value=\"3\">\n                <label for=\"").concat(question.uuid, "\">\u2605</label>\n                \n                <input id=\"").concat(question.uuid, "\" type=\"radio\" name=\"raiting\" value=\"2\">\n                <label for=\"").concat(question.uuid, "\">\u2605</label>\n                \n                <input id=\"").concat(question.uuid, "\" type=\"radio\" name=\"raiting\" value=\"1\">\n                <label for=\"").concat(question.uuid, "\">\u2605</label>\n            </p>\n        </form>\n        </div>");
          });
          root.innerHTML = html;

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

;
var submitAnswer = document.querySelector('#submitAnswer');
submitAnswer.addEventListener('click', answerSubmit);

function answerSubmit() {
  var votation = document.getElementsByTagName('raiting');
  var pepe = document.getElementsByName('raiting');
  console.log(pepe);
}