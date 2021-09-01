"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// QUERYSELECTORS
var addQuest = document.getElementById('addQuest');
var rootQuestions = document.getElementById('rootQuestions');
var subBtn = document.getElementById('subBtn'); // GET USER FOR WELCOME

var getUser = function getUser() {
  var getUser, name;
  return regeneratorRuntime.async(function getUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get("/users/getUsers"));

        case 2:
          getUser = _context.sent;
          name = getUser.data.name;
          render(name);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

var render = function render(name) {
  var root = document.querySelector(".root");
  var renderIt = "<h5 style=\"color: white;\">Welcome ".concat(name, "!</h5>");
  root.innerHTML = renderIt;
};

getUser();

function addSurvey() {
  var questionForm = document.getElementById('questionForm');
  var container = document.querySelector('.container_form');
  var arrQuestions = [];
  var length = questionForm.children.length;

  for (var i = 0; i < length; i++) {
    var questions = questionForm.children[i].children[0].value;
    arrQuestions.push(questions);
  }

  var title = container.children[2].value;
  var newSurv = {
    "title": title,
    "questions": _objectSpread({}, arrQuestions)
  };
  sendSurvey(newSurv);
}

function sendSurvey(newSurv) {
  var response;
  return regeneratorRuntime.async(function sendSurvey$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(axios.post('/survey/addSurvey', newSurv));

        case 2:
          response = _context2.sent;

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}

var cont = 0;

function dispayFormQuestions() {
  var questionForm = document.getElementById('questionForm');
  var html = "";
  html = "<div> \n      <input type=\"text\" name=\"question\" class=\"form-control question_input\" id=\"question".concat(cont, "\" placeholder=\"Make your question...\">\n      </div");
  questionForm.insertAdjacentHTML("beforeend", html);
  cont++;
} // LOGOUT


function logOut() {
  var logOut;
  return regeneratorRuntime.async(function logOut$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(axios("/logIn/logOut"));

        case 2:
          logOut = _context3.sent;
          window.location.href = "http://localhost:3500/";

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
} // EVENT LISTENERS


subBtn.addEventListener('click', addSurvey);
addQuest.addEventListener('click', dispayFormQuestions);