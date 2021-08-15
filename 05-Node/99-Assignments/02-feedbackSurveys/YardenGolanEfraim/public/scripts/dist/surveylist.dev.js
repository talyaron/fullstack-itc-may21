"use strict";

function getAdminUser() {
  var nameDisplay, adminUser;
  return regeneratorRuntime.async(function getAdminUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          nameDisplay = document.querySelector("h1");
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get('/admin'));

        case 3:
          adminUser = _context.sent;
          console.log(adminUser);
          _context.next = 7;
          return regeneratorRuntime.awrap(adminUser.data.name);

        case 7:
          nameDisplay.innerText = _context.sent;
          renderArrayToDom(adminUser.data.createdSurvey);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}

window.addEventListener("load", getAdminUser());

function handleSurvey(event) {
  var surveyName, adminUser, result;
  return regeneratorRuntime.async(function handleSurvey$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          event.preventDefault();
          surveyName = event.target.elements.survey.value;
          _context2.next = 4;
          return regeneratorRuntime.awrap(axios.get('/admin'));

        case 4:
          adminUser = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(axios.post('/surveys/addSurvey', {
            surveyName: surveyName,
            adminEmail: adminUser.data.email
          }));

        case 7:
          result = _context2.sent;
          _context2.next = 10;
          return regeneratorRuntime.awrap(console.log(result));

        case 10:
          _context2.next = 12;
          return regeneratorRuntime.awrap(renderArrayToDom(result.data.createdSurvey));

        case 12:
          event.target.reset();

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function renderArrayToDom(surveyArray) {
  try {
    var list = document.querySelector(".holder");
    var html = '';
    surveyArray.forEach(function (survey) {
      html += "<div class=\"holder__survey\" onclick='moveToSurveyEdit(\"".concat(survey.surveyID, "\")' id='").concat(survey.surveyID, "'>\n                        <div class=\"holder__survey__header\">Survey:</div>\n                        <div class=\"holder__survey__taskDisplay\">").concat(survey.title, "</div>\n                    </div>");
    });
    list.innerHTML = html;
  } catch (e) {
    console.error(e);
  }
}

function moveToSurveyEdit(surveyID) {
  axios.get("/surveys/sendSurvey?id=".concat(surveyID));
  window.location.href = "/surveyedit.html";
}