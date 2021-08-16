"use strict";

var root = document.querySelector('#nameUser'); //YS: Good

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
  var surveysToShow, root, html, surveys;
  return regeneratorRuntime.async(function getSurveysToShow$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(axios.get("/surveys/survey/all"));

        case 2:
          surveysToShow = _context3.sent;
          root = document.querySelector('#root');
          html = "";
          surveys = surveysToShow.data.surveys;
          surveys.forEach(function (survey) {
            html += " <div class=\"showSurvey\">\n    <button class=\"showSurvey__title title--modify\" onclick=showSurvey(\"".concat(survey.uuid, "\")>").concat(survey.title, " <span class=\"nameUser__title\">Answers: ").concat(survey.questions[0].ratings.length, " </span></button> \n                    <i class=\"fas fa-share-alt-square button__survey\" id=\"Element").concat(survey.uuid, "\" onclick='copyTextFromElement(\"").concat(survey.uuid, "\")'></i>\n                </div>");
          });
          root.innerHTML = html;

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
}

; //Function when you click on a Survey you will redirect to other page to see all the information of it

function showSurvey(surveyId) {
  window.location.href = "./05- view-survey.html?uuid=".concat(surveyId);
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
}