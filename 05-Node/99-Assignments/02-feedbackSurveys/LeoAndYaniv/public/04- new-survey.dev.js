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
  var toRender = "<h1><span class=\"nameUser__title\">".concat(username, "</span> lets create an amazing survey!</h1>");
  loggedUser.innerHTML = toRender;
}

;
var createQuestion = document.querySelector('#question-form');
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
          modalUpload.style.display = "none";
          ev.target.reset();
          _context2.next = 10;
          return regeneratorRuntime.awrap(axios.post("/surveys/createQuestion/".concat(uuid), {
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
    html += " <div><h3>".concat(question.content, "</h3>\n        <button onclick=\"deleteQuestion('").concat(question.uuid, "')\">Delete</button>\n        <button class=\"buttonEdit\" onclick=\"editQuestion('").concat(question.uuid, "','").concat(question.content, "')\">Edit</button>\n        </div>");
  });
  root.innerHTML = html;
}

;

function editQuestion(qUuid, question) {
  try {
    if (!modalEdit) throw new Error('There is a problem finding modalEdit from HTML');
    modalEdit.style.display = "block";
    modalEdit.classList.add("showModal");
    var formEdit = document.querySelector("#formEdit");
    if (!formEdit) throw new Error('There is a problem finding form from HTML');
    var html = "\n        <div id=\"modalToEdit\">\n        <h3>Edit question</h3>\n\n        <div class=\"form__wrapper\">\n            <input type=\"text\" id=\"questionContent\" value=\"".concat(question, "\" required>\n            <button class=\"form__submit--newuser\" id=\"updateQuestion\" onclick=\"handleEdit('").concat(qUuid, "')\">Update question</button>\n        </div>\n        <div>");
    formEdit.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

; //Handle Edit

function handleEdit(qUuid) {
  var questionContent, questionsEdited;
  return regeneratorRuntime.async(function handleEdit$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          questionContent = document.querySelector('#questionContent');
          questionContent = questionContent.value;

          if (questionContent) {
            _context3.next = 5;
            break;
          }

          throw new Error("You need to complete all the fields");

        case 5:
          if (modalEdit) {
            _context3.next = 7;
            break;
          }

          throw new Error('There is a problem finding modalEdit from HTML');

        case 7:
          modalEdit.style.display = "none";
          _context3.next = 10;
          return regeneratorRuntime.awrap(axios.put("/surveys/editQuestion/".concat(qUuid, "/").concat(uuid), {
            questionContent: questionContent
          }));

        case 10:
          questionsEdited = _context3.sent;
          renderQuestions(questionsEdited.data.survey.questions);
          _context3.next = 17;
          break;

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);

        case 17:
          ;

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 14]]);
}

; //Delete a question:

function deleteQuestion(qUuid) {
  var option, questions;
  return regeneratorRuntime.async(function deleteQuestion$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          option = confirm("Are you sure do you want to delete this question?");

          if (!option) {
            _context4.next = 7;
            break;
          }

          _context4.next = 5;
          return regeneratorRuntime.awrap(axios["delete"]("/surveys/deleteQuestion/".concat(qUuid, "/").concat(uuid)));

        case 5:
          questions = _context4.sent;
          renderQuestions(questions.data.survey.questions);

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

; //When the user click on the button "Cancel and go back" is going to cancel all the survey

var cancelSurvey = document.querySelector("#buttonCancel");
cancelSurvey.addEventListener('click', cancelTheSurvey);

function cancelTheSurvey() {
  var option, userDetails;
  return regeneratorRuntime.async(function cancelTheSurvey$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          option = confirm("Are you sure do you want to cancel all the survey, you will lose all the data created here?");

          if (!option) {
            _context5.next = 8;
            break;
          }

          _context5.next = 5;
          return regeneratorRuntime.awrap(axios["delete"]("/surveys/deleteSurvey/".concat(uuid)));

        case 5:
          userDetails = _context5.sent;
          console.log(userDetails);
          location.href = "03- surveys.html?email=".concat(userDetails.data.userDetails);

        case 8:
          _context5.next = 13;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 10]]);
}

; //When the user click on the button "Upload the survey" is going to create the survay and save it in the "survey.json"

var uploadSurvey = document.querySelector("#new-survey");
uploadSurvey.addEventListener('submit', uploadTheSurvey);

function uploadTheSurvey(ev) {
  var surveyTitle, userDetails;
  return regeneratorRuntime.async(function uploadTheSurvey$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          ev.preventDefault();
          surveyTitle = ev.target.elements.surveyTitle;
          surveyTitle = surveyTitle.value;

          if (surveyTitle) {
            _context6.next = 6;
            break;
          }

          throw new Error("Please type a title for the survey");

        case 6:
          ev.target.reset(); //UUID is the id from the survey

          _context6.next = 9;
          return regeneratorRuntime.awrap(axios.post("/user/uploadUserWithSurvey/".concat(uuid), {
            surveyTitle: surveyTitle
          }));

        case 9:
          userDetails = _context6.sent;
          location.href = "03- surveys.html?email=".concat(userDetails.data.userDetails);
          _context6.next = 16;
          break;

        case 13:
          _context6.prev = 13;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);

        case 16:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 13]]);
}

;
var backToSurveysBtn = document.querySelector('#to-surveys');
backToSurveysBtn.addEventListener('click', backToSurveys);

function backToSurveys() {
  var userDetails;
  return regeneratorRuntime.async(function backToSurveys$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return regeneratorRuntime.awrap(axios.get("/user/info"));

        case 3:
          userDetails = _context7.sent;
          location.href = "03- surveys.html?email=".concat(userDetails.data.email);
          _context7.next = 10;
          break;

        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);

        case 10:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

;