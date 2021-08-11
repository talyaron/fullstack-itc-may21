"use strict";

//Get the UUID from the URL
var url_string = window.location.href;
var url = new URL(url_string);
var uuid = url.searchParams.get("uuid");
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
            _context3.next = 8;
            break;
          }

          _context3.next = 5;
          return regeneratorRuntime.awrap(axios["delete"]("/surveys/deleteQuestion/".concat(id, "/").concat(uuid)));

        case 5:
          questions = _context3.sent;
          console.log(questions);
          renderQuestions(questions.data.surveys);

        case 8:
          _context3.next = 13;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
}

;
/* //Get all the questions to show from this survey:
async function getAllQuestions() {
    try {
        const questionsFromSurvey = await axios.get(`/surveys/getQuestions/${uuid}`);
        renderQuestions(questionsFromSurvey.data.survey.questions);
    } catch (error) {
        console.log(error);
    }
}; */