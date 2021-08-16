"use strict";

function getAdminUser() {
  var nameDisplay, adminUser;
  return regeneratorRuntime.async(function getAdminUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          nameDisplay = document.querySelector("h1");
          _context.next = 4;
          return regeneratorRuntime.awrap(axios.get('/admin'));

        case 4:
          adminUser = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(adminUser.data.name);

        case 7:
          nameDisplay.innerText = _context.sent;
          //YS: YOu dont need an await for this. 
          renderArrayToDom(adminUser.data.createdSurvey);
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
}

window.addEventListener("load", getAdminUser());

function handleSurvey(event) {
  var surveyName, adminUser, result;
  return regeneratorRuntime.async(function handleSurvey$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          event.preventDefault();
          _context2.prev = 1;
          surveyName = event.target.elements.survey.value;
          _context2.next = 5;
          return regeneratorRuntime.awrap(axios.get('/admin'));

        case 5:
          adminUser = _context2.sent;
          _context2.next = 8;
          return regeneratorRuntime.awrap(axios.post('/surveys/addSurvey', {
            surveyName: surveyName,
            adminEmail: adminUser.data.email
          }));

        case 8:
          result = _context2.sent;
          _context2.next = 11;
          return regeneratorRuntime.awrap(renderArrayToDom(result.data.createdSurvey));

        case 11:
          //YS: This shouldnt be await since the renderArrayToDom is not async
          event.target.reset();
          _context2.next = 17;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](1);
          console.error(_context2.t0);

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 14]]);
}

document.querySelector(".form-field").addEventListener("submit", handleSurvey);

function renderArrayToDom(surveyArray) {
  try {
    var list = document.querySelector(".holder");
    var html = '';
    surveyArray.forEach(function (survey) {
      html += "<div class=\"holder__survey\" onclick='moveToSurveyEdit(\"".concat(survey.surveyID, "\")' id='").concat(survey.surveyID, "'>\n                        <div class=\"holder__survey__header\">Survey:</div>\n                        <div class=\"holder__survey__taskDisplay\">").concat(survey.title, "</div>\n                    </div>\n                    <div class=\"holder__delete\" onclick='deleteSurvey(\"").concat(survey.surveyID, "\")'>Delete</div>");
    });
    list.innerHTML = html;
  } catch (e) {
    console.error(e);
  }
}

function deleteSurvey(ID) {
  try {
    axios["delete"]("/surveys/deleteSurvey/".concat(ID)).then(function (res) {
      renderArrayToDom(res.data.createdSurvey);
    });
  } catch (e) {
    console.error(e);
  }
}

function moveToSurveyEdit(surveyID) {
  try {
    axios.get("/surveys/sendSurvey?id=".concat(surveyID));
    window.location.href = "/surveyedit.html";
  } catch (e) {
    console.error(e);
  }
}