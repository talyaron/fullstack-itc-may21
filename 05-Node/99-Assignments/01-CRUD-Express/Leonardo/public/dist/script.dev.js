"use strict";

//Handle the form to create a new Task:
var handleForm = document.querySelector(".form");
handleForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  var _event$target$element, _taskTitle, _taskDescription, tasksData;

  return regeneratorRuntime.async(function handleSubmit$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          event.preventDefault();
          _event$target$element = event.target.elements, _taskTitle = _event$target$element.taskTitle, _taskDescription = _event$target$element.taskDescription;
          _taskTitle = _taskTitle.value;
          _taskDescription = _taskDescription.value;

          if (!(!_taskTitle || !_taskDescription)) {
            _context.next = 7;
            break;
          }

          throw new Error("Please complete all the fields");

        case 7:
          modalCreate.style.display = "none";
          event.target.reset();
          _context.next = 11;
          return regeneratorRuntime.awrap(axios.post('/createTask', {
            taskTitle: _taskTitle,
            taskDescription: _taskDescription
          }));

        case 11:
          tasksData = _context.sent;
          renderTask(tasksData.data.tasks);
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          console.error();

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 15]]);
}

; //Function to render the data of the tasks in the DOM

function renderTask(data) {
  try {
    var toDoElement = document.querySelector('#toDo');
    if (!toDoElement) throw new Error('Can´t find the element "toDo"');
    var htmltoDo = renderThrough(data, 'toDo');
    toDoElement.innerHTML = htmltoDo;
    var inProgressElement = document.querySelector('#inProgress');
    if (!inProgressElement) throw new Error('Can´t find the element "inProgress"');
    var htmlInProgress = renderThrough(data, 'inProgress');
    inProgressElement.innerHTML = htmlInProgress;
    var doneElement = document.querySelector('#done');
    if (!doneElement) throw new Error('Can´t find the element "done"');
    var htmlDone = renderThrough(data, 'done');
    doneElement.innerHTML = htmlDone;
  } catch (error) {
    console.error(error);
  }

  ;
}

; //This function is a continuation of a function "renderTask(data)", because I split the tasks by status

function renderThrough(data, status) {
  try {
    var toShow = data.map(function (task) {
      if (task.status === status) {
        var taskDateCreated = readableDate(task.dateCreated);
        return "<div class='tasks ".concat(status, "' id='").concat(task.id, "' draggable=\"true\" ondragstart=\"onDragStart(event)\">\n                    <button class=\"tasks__edit\" id='").concat(task.id, "name' onclick=uploadTask(\"").concat(task.id, "\")>\n                        <h4> ").concat(task.title, " </h4>             \n                        <p> ").concat(task.description, " </p>\n                    </button>\n                    <div class=\"tasks__info\">\n                    <p><i class=\"fas fa-trash tasks__delete--button\" onclick='deleteTask(\"").concat(task.id, "\")' title=\"Remove\"></i></p>\n                    <span class=\"tasks__info--date\">").concat(taskDateCreated, "</span>\n                    </div>\n                    </div>");
      }
    }).join('');
    return toShow;
  } catch (error) {
    console.error(error);
  }

  ;
}

; //This function is to edit the format for the Date that Im going to show in the DOM

function readableDate(date) {
  //YS: Nice! There is a library called moment which does this for you. 
  try {
    var today = new Date(date);
    var options = {
      day: 'numeric',
      month: 'numeric',
      year: '2-digit'
    };
    return today.toLocaleDateString('en-GB', options);
  } catch (error) {
    console.error(error);
  }

  ;
}

; //Get the tasks information:

function getAllTasks() {
  var tasksData;
  return regeneratorRuntime.async(function getAllTasks$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(axios.get('/getAllTasks'));

        case 3:
          tasksData = _context2.sent;
          renderTask(tasksData.data);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

; //Delete a task:

function deleteTask(id) {
  var option, tasksData;
  return regeneratorRuntime.async(function deleteTask$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          option = confirm("Are you sure do you want to delete this task?");

          if (!option) {
            _context3.next = 7;
            break;
          }

          _context3.next = 5;
          return regeneratorRuntime.awrap(axios["delete"]("/deleteTask/".concat(id)));

        case 5:
          tasksData = _context3.sent;
          renderTask(tasksData.data.tasks);

        case 7:
          _context3.next = 12;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

; //Update a task:
//This will contain the Task ID to Edit

var taskIdEdit = ''; //YS: You can just do: let taskIdEdit;

function uploadTask(id) {
  var formEdit, tasksData, html;
  return regeneratorRuntime.async(function uploadTask$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;

          if (modalEdit) {
            _context4.next = 3;
            break;
          }

          throw new Error('There is a problem finding modalEdit from HTML');

        case 3:
          modalEdit.style.display = "block";
          modalEdit.classList.add("showModal");
          formEdit = document.querySelector("#formEdit");

          if (formEdit) {
            _context4.next = 8;
            break;
          }

          throw new Error('There is a problem finding form from HTML');

        case 8:
          _context4.next = 10;
          return regeneratorRuntime.awrap(axios.get('/getAllTasks'));

        case 10:
          tasksData = _context4.sent;
          html = tasksData.data.map(function (element) {
            if (element.id === id) {
              return "<div id=\"checkRadioButton\" onmouseenter='radioButtonCheck(\"".concat(element.status, "\")'>\n                    <div class=\"form__wrapper\">\n                    <label for=\"title\">Title:</label>\n                    <input class=\"form__input\" type=\"text\" name=\"title\" id=\"title\" maxlength=\"40\" value=\"").concat(element.title, "\" required>\n                    </div>\n    \n                    <div class=\"form__wrapper\">\n                    <label for=\"description\">Description:</label>\n                    <textarea class=\"form__textarea\" type=\"text\" name=\"description\" id=\"description\" cols=\"30\" rows=\"10\"\n                    maxlength=\"200\" required>").concat(element.description, "</textarea>\n                    </div>\n    \n                    <div class=\"form__wrapper\">\n                    <label>Status:</label>\n                        <div class=\"form__radio\">\n                        <label for=\"toDo2\">To Do</label>\n                        <input type=\"radio\" id=\"toDo2\" name=\"status\" value=\"toDo\"/>\n    \n                        <label for=\"inProgress2\">In Progress</label>\n                        <input type=\"radio\" id=\"inProgress2\" name=\"status\" value=\"inProgress\"/>\n    \n                        <label for=\"done2\">Done</label>\n                        <input type=\"radio\" id=\"done2\" name=\"status\" value=\"done\"/>\n                        </div>\n                    </div>\n                    <input class=\"form__input--submit\" type=\"submit\" value=\"Save changes\">\n                    </div>");
            }
          }).join('');
          formEdit.innerHTML = html;
          taskIdEdit = id; //YS: Nice

          _context4.next = 19;
          break;

        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);

        case 19:
          ;

        case 20:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 16]]);
} //In the "form Edit" I stablish the previous checked value that the element already has 


function radioButtonCheck(status) {
  try {
    var elementWithTheEvent = document.querySelector('#checkRadioButton');
    if (!elementWithTheEvent) throw new Error('The is a problem finding the element to check the radio button');
    var radioToDo = document.querySelector('#toDo2');
    if (!radioToDo) throw new Error('The is a problem finding the element "toDo" radio button');
    var radioInProgress = document.querySelector('#inProgress2');
    if (!radioInProgress) throw new Error('The is a problem finding the element "inProgress" radio button');
    var radioDone = document.querySelector('#done2');
    if (!radioDone) throw new Error('The is a problem finding the element "done" radio button');

    switch (status) {
      case 'toDo':
        radioToDo.checked = true;
        break;

      case 'inProgress':
        radioInProgress.checked = true;
        break;

      case 'done':
        radioDone.checked = true;
        break;
    }

    ; //With this the event is going to happen only once

    elementWithTheEvent.onmouseenter = null;
  } catch (error) {
    console.error(error);
  }

  ;
}

; //Handle Edit

function handleEdit(ev) {
  var _ev$target$elements, title, description, status, tasksData, tasks;

  return regeneratorRuntime.async(function handleEdit$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          ev.preventDefault();
          _context5.prev = 1;
          _ev$target$elements = ev.target.elements, title = _ev$target$elements.title, description = _ev$target$elements.description, status = _ev$target$elements.status;
          taskTitle = title.value;
          taskDescription = description.value;
          taskStatus = status.value;

          if (!(!taskTitle || !taskDescription || !taskStatus)) {
            _context5.next = 8;
            break;
          }

          throw new Error("You need to complete all the fields");

        case 8:
          if (modalEdit) {
            _context5.next = 10;
            break;
          }

          throw new Error('There is a problem finding modalEdit from HTML');

        case 10:
          modalEdit.style.display = "none";
          ev.target.reset();
          _context5.next = 14;
          return regeneratorRuntime.awrap(axios.put("/editTask/".concat(taskIdEdit), {
            taskTitle: taskTitle,
            taskDescription: taskDescription,
            taskStatus: taskStatus
          }));

        case 14:
          tasksData = _context5.sent;
          tasks = tasksData.data.tasks;
          renderTask(tasks);
          _context5.next = 22;
          break;

        case 19:
          _context5.prev = 19;
          _context5.t0 = _context5["catch"](1);
          console.error(_context5.t0);

        case 22:
          ;

        case 23:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 19]]);
}

;