"use strict";

var root = document.querySelector('#nameUser');

function renderUserDetails() {
  var userDetails, username, toRender;
  return regeneratorRuntime.async(function renderUserDetails$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get('/user/info'));

        case 2:
          userDetails = _context.sent;
          username = userDetails.data.username;
          toRender = "<h1>Welcome <span class=\"nameUser__title\">".concat(username, "</span></h1>");
          root.innerHTML = toRender;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

;
var redirectButton = document.querySelector('#redirect');
redirectButton.addEventListener('click', createSurvey);

function createSurvey() {
  var idSurveyCreated;
  return regeneratorRuntime.async(function createSurvey$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(axios.post("/surveys/survey/new"));

        case 3:
          idSurveyCreated = _context2.sent;
          window.location.href = "./04- new-survey.html?uuid=".concat(idSurveyCreated.data.survey.uuid);

          if (window.location.href) {
            _context2.next = 7;
            break;
          }

          throw new Error('The page where you want to redirect it doesn´t exist!');

        case 7:
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

; //Function to render all the surveys from the user that is login

function getSurveysToShow() {
  var surveysToShow, _root, html, surveys;

  return regeneratorRuntime.async(function getSurveysToShow$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(axios.get("/surveys/survey/all"));

        case 3:
          surveysToShow = _context3.sent;
          _root = document.querySelector('#root');
          html = "";
          surveys = surveysToShow.data.surveys;
          surveys.forEach(function (survey) {
            html += " <div class=\"showSurvey\">\n    <button class=\"showSurvey__title title--modify\" onclick=showSurvey(\"".concat(survey.uuid, "\")>").concat(survey.title, " <span class=\"nameUser__title\">Answers: ").concat(survey.questions[0].ratings.length, " </span></button> \n                    <i class=\"fas fa-share-alt-square button__survey\" id=\"Element").concat(survey.uuid, "\" onclick='copyTextFromElement(\"").concat(survey.uuid, "\")'></i>\n                    <i class=\"fas fa-trash-alt button--pointer button__survey\" onclick=deleteSurvey(\"").concat(survey.uuid, "\")></i>\n                </div>");
          });
          _root.innerHTML = html;
          _context3.next = 14;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 11]]);
}

; //Function when you click on a Survey you will redirect to other page to see all the information of it

function showSurvey(surveyId) {
  try {
    window.location.href = "./05- view-survey.html?uuid=".concat(surveyId);
  } catch (error) {
    console.error(error);
  }
} //Function to copy the path


function copyTextFromElement(surveyUuid) {
  try {
    var sharableSurveyLink = "http://localhost:3000/06-%20answer-login.html?".concat(surveyUuid); //Copy the text to the clipboard

    var successful = navigator.clipboard.writeText(sharableSurveyLink);
    var buttonCopy = document.querySelector("#Element".concat(surveyUuid));
    if (successful) buttonCopy.innerHTML = "Link copied to clipboard!";else buttonCopy.innerHTML = "Unable to copy!";
  } catch (error) {
    console.error(error);
  }
} //Function to delete a survey


function deleteSurvey(surveyId) {
  var option, info;
  return regeneratorRuntime.async(function deleteSurvey$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          option = confirm("Are you sure do you want to delete this survey?");

          if (!option) {
            _context4.next = 9;
            break;
          }

          _context4.next = 5;
          return regeneratorRuntime.awrap(axios["delete"]("/surveys/survey/".concat(surveyId)));

        case 5:
          _context4.next = 7;
          return regeneratorRuntime.awrap(axios["delete"]("/user/deleteSurvey/".concat(surveyId)));

        case 7:
          info = _context4.sent;
          getSurveysToShow();

        case 9:
          _context4.next = 14;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 11]]);
}