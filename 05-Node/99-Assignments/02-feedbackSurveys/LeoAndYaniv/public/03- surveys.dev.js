"use strict";

var root = document.querySelector('#nameUser');

function getUserDetailsFromCookie() {
  var userDetails, username, email;
  return regeneratorRuntime.async(function getUserDetailsFromCookie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get('/user/info'));

        case 2:
          userDetails = _context.sent;
          username = userDetails.data.username;
          email = userDetails.data.email;
          renderuserDetails(username);
          bringSurveysToShow(email);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

;

function renderuserDetails(username) {
  var toRender = "<h1>Welcome <span class=\"nameUser__title\">".concat(username, "</span></h1>");
  root.innerHTML = toRender;
}

;
var redirectButton = document.querySelector('#redirect');
redirectButton.addEventListener('click', createSurvey);

function createSurvey() {
  var url_string, url, email, idSurveyCreated;
  return regeneratorRuntime.async(function createSurvey$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          url_string = window.location.href;
          url = new URL(url_string);
          email = url.searchParams.get("email");
          _context2.next = 6;
          return regeneratorRuntime.awrap(axios.post("/surveys/createSurvey/".concat(email)));

        case 6:
          idSurveyCreated = _context2.sent;
          window.location.href = "./04- new-survey.html?uuid=".concat(idSurveyCreated.data.survey.uuid);

          if (window.location.href) {
            _context2.next = 10;
            break;
          }

          throw new Error('The page where you want to redirect it doesn´t exist!');

        case 10:
          _context2.next = 15;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

; //Function to render all the surveys from the user that is login

function bringSurveysToShow(emailLogin) {
  var bringSurveys, root, html;
  return regeneratorRuntime.async(function bringSurveysToShow$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(axios.get("/surveys/getSurveys/".concat(emailLogin)));

        case 2:
          bringSurveys = _context3.sent;
          root = document.querySelector('#root');
          html = "";
          bringSurveys.data.surveys.forEach(function (survey) {
            html += " <div class=\"showSurvey\">\n                    <button class=\"showSurvey__title\" onclick=showSurveyInfo(\"".concat(survey.uuid, "\")>").concat(survey.title, "</button>\n                </div>");
          });
          root.innerHTML = html;

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
}

; //Function when you click on a Survey you will redirect to other page to see all the information of it

function showSurveyInfo(surveyId) {
  window.location.href = "./05- view-survey.html?uuid=".concat(surveyId);
}