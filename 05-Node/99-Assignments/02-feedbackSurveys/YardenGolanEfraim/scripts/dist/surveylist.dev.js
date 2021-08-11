"use strict";

var adminUser = {};

function getAdminUser() {
  var nameDisplay;
  return regeneratorRuntime.async(function getAdminUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          nameDisplay = document.querySelector("h1");
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get('/selectedAdminUser'));

        case 3:
          adminUser = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(console.log(adminUser.data[0]));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(adminUser.data.name);

        case 8:
          nameDisplay.innerText = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(renderArrayToDom(adminUser.data.createdSurvey));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}

window.addEventListener("load", getAdminUser());

function handleSurvey(event) {
  var surveyName, result;
  return regeneratorRuntime.async(function handleSurvey$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          event.preventDefault();
          surveyName = event.target.elements.survey.value;
          _context2.next = 4;
          return regeneratorRuntime.awrap(axios.post('/addSurvey', {
            surveyName: surveyName,
            adminEmail: adminUser.data.email
          }));

        case 4:
          result = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(console.log(result));

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(renderArrayToDom(result.data.createdSurvey));

        case 9:
          event.target.reset();

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function addQuestions(ID) {
  var modal = document.querySelector(".myModal");
  modal.innerHTML = "<div id=\"myModal\" class=\"modal\">\n                            <div class=\"modal-content\">\n                                <span class=\"close\">&times;</span>\n                                 <form onsubmit=\"handleQuestions(event)\">\n                                     <div id=\"question-holder\">\n                                        <input type=\"text\" name=\"".concat(ID, "\" id=\"").concat(ID, "\" placeholder=\"Question\" required>\n                                    </div>\n                                    <button id=\"addQuestion\" onclick=\"addAnotherQuestion()\">Add Question</button>\n                                    <button id=\"submit\" type=\"submit\">Submit Questions!</button>\n                                </form>\n                            </div>\n                        </div> ");
  var modalDisplay = document.getElementById("myModal"); // Get the <span> element that closes the modal
  // const span = document.getElementsByClassName("close")[0];
  // When the user clicks on the button, open the modal

  modalDisplay.style.display = "block"; // // When the user clicks on <span> (x), close the modal
  // span.onclick = function () {
  //     modal.style.display = "none";
  // }
  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function (event) {
  //     if (event.target == modal) {
  //         modal.style.display = "none";
  //     }
  // }}
}

var questionIDCounter = 1;

function handleQuestions(event) {
  var questions, surveyID, result, modalDisplay;
  return regeneratorRuntime.async(function handleQuestions$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          event.preventDefault();
          console.log(event.target.elements[0].id);
          questions = [];

          for (i = 0; i < questionIDCounter; i++) {
            questions.push(event.target.elements[i].value);
          }

          surveyID = event.target.elements[0].id;
          console.log(questions);
          _context3.next = 8;
          return regeneratorRuntime.awrap(axios.post('/postQuestions', {
            questions: questions,
            surveyID: surveyID
          }));

        case 8:
          result = _context3.sent;
          _context3.next = 11;
          return regeneratorRuntime.awrap(console.log(result));

        case 11:
          questionIDCounter = 1;
          event.target.reset();
          modalDisplay = document.getElementById("myModal");
          modalDisplay.style.display = "none";

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function addAnotherQuestion() {
  var questionHolder = document.getElementById("question-holder");
  questionHolder.innerHTML += "<input type=\"text\" name=\"question".concat(questionIDCounter, "\" placeholder=\"question\" required>");
  questionIDCounter++;
}

function renderArrayToDom(surveyArray) {
  try {
    var list = document.querySelector(".holder");
    var html = '';
    surveyArray.forEach(function (survey) {
      html += "<div class=\"holder__survey\" onclick='addQuestions(\"".concat(survey.surveyID, "\")' id='").concat(survey.surveyID, "'>\n                          \n                        <div class=\"holder__survey__header\">Survey:</div>\n                        <div class=\"holder__survey__taskDisplay\">").concat(survey.title, "</div>\n                        <div class=\"button button--delete\" onclick='deleteSurvey(\"").concat(survey.surveyID, "\")'>DELETE</div>\n                    </div>");
    });
    list.innerHTML = html;
  } catch (e) {
    console.error(e);
  }
}