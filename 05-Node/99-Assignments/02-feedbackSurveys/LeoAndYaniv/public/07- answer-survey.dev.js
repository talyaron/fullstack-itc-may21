"use strict";

//Get the UUID from the URL
var url_string = window.location.href;
var url = new URL(url_string);
var uuid = url.searchParams.get("uuid");

function getUserDetailsFromCookie() {
  var userDetails, username;
  return regeneratorRuntime.async(function getUserDetailsFromCookie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get('/user/info'));

        case 2:
          userDetails = _context.sent;
          username = userDetails.data.username;
          renderUserDetails(username);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

;

function renderUserDetails(username) {
  var loggedUser = document.querySelector('#nameUser');
  var toRender = "<h1>Ready to answer the survey, <span class=\"nameUser__title\">".concat(username, "</span>?</h1>");
  loggedUser.innerHTML = toRender;
  renderSurveyInfo();
}

; //Function to render the data of a survey in the DOM

function renderSurveyInfo() {
  var root, questionsCreated, title, html;
  return regeneratorRuntime.async(function renderSurveyInfo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          root = document.querySelector("#root");
          _context2.next = 3;
          return regeneratorRuntime.awrap(axios.get("/surveys/getQuestions/".concat(uuid)));

        case 3:
          questionsCreated = _context2.sent;
          title = document.querySelector("#title");
          title.innerHTML = "<h2 class=\"survey__title\">".concat(questionsCreated.data.survey.title, "</h2>\n    <div class=\"button__share\"><i class=\"fas fa-share-alt-square\" id=\"Element").concat(uuid, "\" onclick='copyTextFromElement()'></i></div>");
          html = "";
          questionsCreated.data.survey.questions.forEach(function (question) {
            html += "<div class=\"survey__questions submit\" id=\"".concat(question.uuid, "\">\n        <h3>").concat(question.content, "</h3>\n            <p class=\"raitings\">\n                <input id=\"").concat(question.uuid, "1\" type=\"radio\" name=\"raiting").concat(question.uuid, "\" value=\"5\">\n                <label for=\"").concat(question.uuid, "1\">\u2605</label>\n                \n                <input id=\"").concat(question.uuid, "2\" type=\"radio\" name=\"raiting").concat(question.uuid, "\" value=\"4\">\n                <label for=\"").concat(question.uuid, "2\">\u2605</label>\n                \n                <input id=\"").concat(question.uuid, "3\" type=\"radio\" name=\"raiting").concat(question.uuid, "\" value=\"3\">\n                <label for=\"").concat(question.uuid, "3\">\u2605</label>\n                \n                <input id=\"").concat(question.uuid, "4\" type=\"radio\" name=\"raiting").concat(question.uuid, "\" value=\"2\">\n                <label for=\"").concat(question.uuid, "4\">\u2605</label>\n                \n                <input id=\"").concat(question.uuid, "5\" type=\"radio\" name=\"raiting").concat(question.uuid, "\" value=\"1\">\n                <label for=\"").concat(question.uuid, "5\">\u2605</label>\n            </p>\n        </div>");
          });
          root.insertAdjacentHTML("afterbegin", html);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
}

; //Handle the form to create a new user:

var handleForm = document.querySelector("#root");
handleForm.addEventListener('submit', answerSubmit);

function answerSubmit(ev) {
  var answeredQuestions, index, element, answeredQuestion, userDetails, _userDetails$data, username, email;

  return regeneratorRuntime.async(function answerSubmit$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          answeredQuestions = [];
          ev.preventDefault();

          for (index = 0; index < ev.target.elements.length; index++) {
            element = ev.target.elements[index];

            if (element.checked) {
              element.id = element.id.substring(0, element.id.length - 1);
              answeredQuestion = {
                questionId: element.id,
                rating: Number(element.value)
              };
              answeredQuestions.push(answeredQuestion);
            }
          }

          _context3.next = 5;
          return regeneratorRuntime.awrap(axios.get('/user/info'));

        case 5:
          userDetails = _context3.sent;
          _userDetails$data = userDetails.data, username = _userDetails$data.username, email = _userDetails$data.email;
          userDetails = {
            username: username,
            email: email,
            uuid: uuid
          };
          _context3.next = 10;
          return regeneratorRuntime.awrap(axios.post('/user/answerLoginAfter', userDetails));

        case 10:
          _context3.next = 12;
          return regeneratorRuntime.awrap(axios.put("/surveys/updateQuestions/".concat(uuid), answeredQuestions));

        case 12:
          alert('Survey completed successfully');
          location.href = "index.html";

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  });
}