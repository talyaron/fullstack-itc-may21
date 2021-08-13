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
          console.log(userInfo);
          username = userInfo.data.username;
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
  var loggedUser = document.querySelector('#nameUser');
  var toRender = "<h1><span class=\"nameUser__title\">".concat(username, "</span> lets create an amazing survey!</h1>");
  loggedUser.innerHTML = toRender;
}

;
var createQuestion = document.querySelector('#create');
createQuestion.addEventListener('submit', addNewQuestion);

function addNewQuestion(ev) {
  var question, questionsCreated;
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
          ev.target.reset();
          _context2.next = 10;
          return regeneratorRuntime.awrap(axios.post("/surveys/create/".concat(uuid), {
            question: question
          }));

        case 10:
          questionsCreated = _context2.sent;
          renderQuestions(questionsCreated.data.survey.questions);
          _context2.next = 17;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 14]]);
}

; //Function to render the data of the questions in the DOM

function renderQuestions(questions) {
  var root = document.querySelector("#root");
  var html = "";
  questions.forEach(function (question) {
    html += " <div><h3>".concat(question.content, "</h3>\n        <button onclick=\"deleteQuestion('").concat(question.uuid, "')\">Delete</button>\n        <button onclick=\"handleEdit('").concat(question.uuid, "')\">Edit</button>\n        </div>");
  });
  root.innerHTML = html;
}

; //Delete a question:

function deleteQuestion(id) {
  var option, questions;
  return regeneratorRuntime.async(function deleteQuestion$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          option = confirm("Are you sure do you want to delete this question?");

          if (!option) {
            _context3.next = 7;
            break;
          }

          _context3.next = 5;
          return regeneratorRuntime.awrap(axios["delete"]("/surveys/deleteQuestion/".concat(id, "/").concat(uuid)));

        case 5:
          questions = _context3.sent;
          renderQuestions(questions.data.survey.questions);

        case 7:
          _context3.next = 12;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

; //When the user click on the button "Cancel and go back" is going to cancel all the survey

var cancelSurvey = document.querySelector("#buttonCancel");
cancelSurvey.addEventListener('click', cancelTheSurvey);

function cancelTheSurvey() {
  var option, userInfo;
  return regeneratorRuntime.async(function cancelTheSurvey$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          option = confirm("Are you sure do you want to cancel all the survey, you will lose all the data created here?");

          if (!option) {
            _context4.next = 7;
            break;
          }

          _context4.next = 5;
          return regeneratorRuntime.awrap(axios["delete"]("/surveys/deleteSurvey/".concat(uuid)));

        case 5:
          userInfo = _context4.sent;
          location.href = "03- surveys.html?email=".concat(userInfo.data.userInfo);

        case 7:
          _context4.next = 12;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

; //When the user click on the button "Upload the survey" is going to create the survay and save it in the "survey.json"

var uploadSurvey = document.querySelector("#buttonUpload");
uploadSurvey.addEventListener('click', uploadTheSurvey);

function uploadTheSurvey() {
  var inputSurvey, surveyTitle, userInfo;
  return regeneratorRuntime.async(function uploadTheSurvey$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          inputSurvey = document.querySelector('#surveyTitle');
          surveyTitle = inputSurvey.value; //UUID is the id from the survey

          _context5.next = 5;
          return regeneratorRuntime.awrap(axios.post("/user/uploadUserWithSurvey/".concat(uuid), {
            surveyTitle: surveyTitle
          }));

        case 5:
          userInfo = _context5.sent;
          location.href = "03- surveys.html?email=".concat(userInfo.data.userInfo);
          _context5.next = 12;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

;