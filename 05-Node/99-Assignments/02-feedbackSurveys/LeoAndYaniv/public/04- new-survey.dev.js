"use strict";

//Get the UUID from the URL
var url_string = window.location.href;
var url = new URL(url_string);
var uuid = url.searchParams.get("uuid");

function renderUserDetails() {
  var userDetails, username, loggedUser, toRender;
  return regeneratorRuntime.async(function renderUserDetails$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get('/user/info'));

        case 2:
          userDetails = _context.sent;
          username = userDetails.data.username;
          loggedUser = document.querySelector('#nameUser');
          toRender = "<h1><span class=\"nameUser__title\">".concat(username, "</span> lets create an amazing survey!</h1>");
          loggedUser.innerHTML = toRender;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

;
var createQuestion = document.querySelector('#question-form');
createQuestion.addEventListener('submit', addQuestion);

function addQuestion(ev) {
  var question, surveyQuestions, _surveyQuestions$data, disableAddQuestionBtn, disableSubmitSurvey, AddQuestionBtn, SubmitSurvey;

  return regeneratorRuntime.async(function addQuestion$(_context2) {
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
          return regeneratorRuntime.awrap(axios.post("/surveys/question/".concat(uuid, "/new"), {
            question: question
          }));

        case 10:
          surveyQuestions = _context2.sent;
          _surveyQuestions$data = surveyQuestions.data, disableAddQuestionBtn = _surveyQuestions$data.disableAddQuestionBtn, disableSubmitSurvey = _surveyQuestions$data.disableSubmitSurvey;
          renderQuestions();
          AddQuestionBtn = document.querySelector('#buttonCreate');

          if (disableAddQuestionBtn) {
            AddQuestionBtn.disabled = true;
            AddQuestionBtn.classList.add('button--disabled');
          }

          SubmitSurvey = document.querySelector('#buttonUpload');

          if (!disableSubmitSurvey) {
            SubmitSurvey.disabled = false;
            SubmitSurvey.classList.remove('button--disabled');
          }

          _context2.next = 22;
          break;

        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);

        case 22:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 19]]);
}

;

function editQuestion(qUuid, question) {
  try {
    if (!modalEdit) throw new Error('There is a problem finding modalEdit from HTML');
    modalEdit.style.display = "block";
    modalEdit.classList.add("showModal");
    var formEdit = document.querySelector("#formEdit");
    if (!formEdit) throw new Error('There is a problem finding form from HTML');
    var html = "\n        <div class=\"modalEdit\" id=\"modalToEdit\">\n        <h3>Edit question</h3>\n\n        <div class=\"form__wrapper--edit\">\n            <input class=\"form__wrapper--edit--question\" type=\"text\" id=\"questionContent\" value=\"".concat(question, "\" required>\n            <button class=\"form__submit--newuser form__wrapper--edit--button\" id=\"updateQuestion\" onclick=\"handleEdit('").concat(qUuid, "')\">Update question</button>\n        </div>\n        <div>");
    formEdit.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

; //Handle Edit

function handleEdit(qUuid) {
  var questionContent;
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
          return regeneratorRuntime.awrap(axios.put("/surveys/question/".concat(uuid, "/").concat(qUuid), {
            questionContent: questionContent
          }));

        case 10:
          renderQuestions();
          _context3.next = 16;
          break;

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);

        case 16:
          ;

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 13]]);
}

; //Delete a question:

function deleteQuestion(qUuid) {
  var option, surveyQuestions, _surveyQuestions$data2, disableAddQuestionBtn, disableSubmitSurvey, AddQuestionBtn, SubmitSurvey;

  return regeneratorRuntime.async(function deleteQuestion$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          option = confirm("Are you sure do you want to delete this question?");

          if (!option) {
            _context4.next = 12;
            break;
          }

          _context4.next = 5;
          return regeneratorRuntime.awrap(axios["delete"]("/surveys/question/".concat(uuid, "/").concat(qUuid)));

        case 5:
          surveyQuestions = _context4.sent;
          _surveyQuestions$data2 = surveyQuestions.data, disableAddQuestionBtn = _surveyQuestions$data2.disableAddQuestionBtn, disableSubmitSurvey = _surveyQuestions$data2.disableSubmitSurvey;
          renderQuestions();
          AddQuestionBtn = document.querySelector('#buttonCreate');

          if (disableAddQuestionBtn) {
            AddQuestionBtn.disabled = true;
            AddQuestionBtn.classList.add('button--disabled');
          } else {
            AddQuestionBtn.disabled = false;
            AddQuestionBtn.classList.remove('button--disabled');
          }

          SubmitSurvey = document.querySelector('#buttonUpload');

          if (disableSubmitSurvey) {
            SubmitSurvey.disabled = true;
            SubmitSurvey.classList.add('button--disabled');
          }

        case 12:
          _context4.next = 17;
          break;

        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 14]]);
}

; //Function to render the data of the questions in the DOM

function renderQuestions() {
  var surveyQuestions, questions, SubmitSurvey, questionCounterElement, root, html;
  return regeneratorRuntime.async(function renderQuestions$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(axios.get("/surveys/questions/".concat(uuid)));

        case 2:
          surveyQuestions = _context5.sent;
          questions = surveyQuestions.data.survey.questions;
          SubmitSurvey = document.querySelector('#buttonUpload');

          if (questions.length > 0) {
            SubmitSurvey.disabled = false;
            SubmitSurvey.classList.remove('button--disabled');
          }

          questionCounterElement = document.querySelector('#question-counter');
          questionCounterElement.innerText = questions.length;
          root = document.querySelector("#root");
          html = "";
          questions.forEach(function (question) {
            html += " <div class=\"information__question\">\n            <div class=\"information__question--title\">\n            <h3>".concat(question.content, "</h3>\n            </div>\n            <div class=\"information__question--buttons\">\n            <i class=\"fas fa-trash-alt button--pointer\" onclick=\"deleteQuestion('").concat(question.uuid, "')\"></i>\n            <i class=\"fas fa-edit button--pointer\" onclick=\"editQuestion('").concat(question.uuid, "','").concat(question.content, "')\"></i>\n            </div>\n            </div>");
          });
          root.innerHTML = html;

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  });
}

; //When the user click on the button "Cancel and go back" is going to cancel all the survey

var cancelSurvey = document.querySelector("#buttonCancel");
cancelSurvey.addEventListener('click', cancelTheSurvey);

function cancelTheSurvey() {
  var option, userDetails;
  return regeneratorRuntime.async(function cancelTheSurvey$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          option = confirm("Are you sure do you want to cancel the survey, you will lose all the data created here?");

          if (!option) {
            _context6.next = 7;
            break;
          }

          _context6.next = 5;
          return regeneratorRuntime.awrap(axios["delete"]("/surveys/survey/".concat(uuid)));

        case 5:
          userDetails = _context6.sent;
          location.href = "03- surveys.html?email=".concat(userDetails.data.userDetails);

        case 7:
          _context6.next = 12;
          break;

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

; //When the user click on the button "Upload the survey" is going to create the survay and save it in the "survey.json"

var uploadSurvey = document.querySelector("#new-survey");
uploadSurvey.addEventListener('submit', uploadTheSurvey);

function uploadTheSurvey(ev) {
  var surveyTitle, userDetails;
  return regeneratorRuntime.async(function uploadTheSurvey$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          ev.preventDefault();
          surveyTitle = ev.target.elements.surveyTitle;
          surveyTitle = surveyTitle.value;

          if (surveyTitle) {
            _context7.next = 6;
            break;
          }

          throw new Error("Please type a title for the survey");

        case 6:
          ev.target.reset(); //UUID is the id from the survey

          _context7.next = 9;
          return regeneratorRuntime.awrap(axios.post("/user/uploadUserWithSurvey/".concat(uuid), {
            surveyTitle: surveyTitle
          }));

        case 9:
          userDetails = _context7.sent;
          location.href = "03- surveys.html?email=".concat(userDetails.data.userDetails);
          _context7.next = 16;
          break;

        case 13:
          _context7.prev = 13;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);

        case 16:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 13]]);
}

;
var backToSurveysBtn = document.querySelector('#to-surveys');
backToSurveysBtn.addEventListener('click', backToSurveys);

function backToSurveys() {
  var userDetails;
  return regeneratorRuntime.async(function backToSurveys$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return regeneratorRuntime.awrap(axios.get("/user/info"));

        case 3:
          userDetails = _context8.sent;
          location.href = "03- surveys.html?email=".concat(userDetails.data.email);
          _context8.next = 10;
          break;

        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          console.error(_context8.t0);

        case 10:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

;