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
          toRender = "<h1>Awsome survey <span class=\"nameUser__title\">".concat(username, "</span>!</h1>");
          loggedUser.innerHTML = toRender;
          renderSurveyInfo();

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
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
          return regeneratorRuntime.awrap(axios.get("/surveys/questions/".concat(uuid)));

        case 3:
          questionsCreated = _context2.sent;
          title = document.querySelector("#title");
          title.innerHTML = "<h2 class=\"survey__title\">".concat(questionsCreated.data.survey.title, "</h2>\n    <div class=\"button__share\"><i class=\"fas fa-share-alt-square\" id=\"Element").concat(uuid, "\" onclick='copyTextFromElement()'></i></div>");
          html = "";
          questionsCreated.data.survey.questions.forEach(function (question) {
            html += "<div class=\"survey__questions\">".concat(question.content, "</div>");
          });
          root.innerHTML = html;

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
}

; //Function to copy the path

function copyTextFromElement() {
  try {
    var textWantToCopy = "http://localhost:3000/06-%20answer-login.html?".concat(uuid); //Copy the text to the clipboard

    var successful = navigator.clipboard.writeText(textWantToCopy);
    if (successful) alert('Link copied to clipboard!');else buttonCopy.innerHTML = "Unable to copy!";
  } catch (error) {
    console.error(error);
  }
}