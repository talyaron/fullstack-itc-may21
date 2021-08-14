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
  var root, questionsCreated, html, button;
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
            html += "<div id=\"".concat(question.uuid, "\">\n        <h3>").concat(question.content, "</h3>\n            <p class=\"raitings\">\n                <input id=\"").concat(question.uuid, "1\" type=\"radio\" name=\"raiting").concat(question.uuid, "\" value=\"5\">\n                <label for=\"").concat(question.uuid, "1\">\u2605</label>\n                \n                <input id=\"").concat(question.uuid, "2\" type=\"radio\" name=\"raiting").concat(question.uuid, "\" value=\"4\">\n                <label for=\"").concat(question.uuid, "2\">\u2605</label>\n                \n                <input id=\"").concat(question.uuid, "3\" type=\"radio\" name=\"raiting").concat(question.uuid, "\" value=\"3\">\n                <label for=\"").concat(question.uuid, "3\">\u2605</label>\n                \n                <input id=\"").concat(question.uuid, "4\" type=\"radio\" name=\"raiting").concat(question.uuid, "\" value=\"2\">\n                <label for=\"").concat(question.uuid, "4\">\u2605</label>\n                \n                <input id=\"").concat(question.uuid, "5\" type=\"radio\" name=\"raiting").concat(question.uuid, "\" value=\"1\">\n                <label for=\"").concat(question.uuid, "5\">\u2605</label>\n            </p>\n        </div>");
          });
          root.innerHTML = html;
          button = document.createElement('button');
          button.type = 'submit';
          button.className = 'top-menu__button';
          button.innerText = 'Submit answer';
          root.appendChild(button);

        case 12:
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
  var answeredQuestions = [];
  ev.preventDefault();

  for (var index = 0; index < ev.target.elements.length; index++) {
    var element = ev.target.elements[index];

    if (element.checked === true) {
      element.id = element.id.substring(0, element.id.length - 1); //console.log(element.id, "pepe" ,element.value);

      var answeredQuestion = {
        'questionId': element.id,
        'raiting': element.value
      };
      answeredQuestions.push(answeredQuestion);
    }
  }

  console.log(answeredQuestions); //aca tengo que registrar al usuario y tambien registrar las respuestas a las preguntas de los otros usuarios
}