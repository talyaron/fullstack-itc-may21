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
  var html;
  return regeneratorRuntime.async(function renderTask$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          html = data.map(function (task) {
            return "<div class='tasks' draggable=\"true\">\n                <button class=\"tasks__edit\" id='".concat(task.id, "name' onclick=uploadTask(\"").concat(task.id, "\")>\n                    <h4> ").concat(task.title, " </h4>             \n                    <p> ").concat(task.description, " </p>\n                </button>\n                <p><i class=\"fas fa-trash tasks__delete--button\" onclick='deleteTask(\"").concat(task.id, "\")' title=\"Remove\"></i></p>\n                </div>");
          }).join('');
          document.getElementById('toDo').innerHTML = html;

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
}

; //Get the tasks information:

function getAllTasks() {
  var tasksData;
  return regeneratorRuntime.async(function getAllTasks$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(axios.get('/getAllTasks'));

        case 3:
          tasksData = _context3.sent;
          renderTask(tasksData.data);
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

; //Delete a task:

function deleteTask(id) {
  var option, tasksData;
  return regeneratorRuntime.async(function deleteTask$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          option = confirm("Are you sure do you want to delete this task?");

          if (!option) {
            _context4.next = 7;
            break;
          }

          _context4.next = 5;
          return regeneratorRuntime.awrap(axios["delete"]("/deleteTask/".concat(id)));

        case 5:
          tasksData = _context4.sent;
          renderTask(tasksData.data.tasks);

        case 7:
          _context4.next = 12;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

; //Update a task:
//This will contain the Task ID to Edit

var taskIdEdit = '';

function uploadTask(id) {
  var formEdit, tasksData, html;
  return regeneratorRuntime.async(function uploadTask$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;

          if (modalEdit) {
            _context5.next = 3;
            break;
          }

          throw new Error('There is a problem finding modalEdit from HTML');

        case 3:
          modalEdit.style.display = "block";
          modalEdit.classList.add("showModal");
          formEdit = document.querySelector("#formEdit");

          if (formEdit) {
            _context5.next = 8;
            break;
          }

          throw new Error('There is a problem finding form from HTML');

        case 8:
          _context5.next = 10;
          return regeneratorRuntime.awrap(axios.get('/getAllTasks'));

        case 10:
          tasksData = _context5.sent;
          html = tasksData.data.map(function (element) {
            if (element.id === id) {
              console.log(element);
              return "<h1>EDIT TASK</h1>\n                    \n                    <div class=\"form__wrapper\">\n                    <label for=\"title\">Title:</label>\n                    <input type=\"text\" name=\"title\" id=\"title\" maxlength=\"40\" value=\"".concat(element.title, "\" required>\n                    </div>\n    \n                    <div class=\"form__wrapper\">\n                    <label for=\"description\">Description:</label>\n                    <textarea type=\"text\" name=\"description\" id=\"description\" cols=\"30\" rows=\"10\"\n                    maxlength=\"200\" required>").concat(element.description, "</textarea>\n                    </div>\n    \n                    <div>\n                        <label for=\"toDo\">To Do</label>\n                        <input type=\"radio\" id=\"toDo\" name=\"status\" value=\"toDo\" checked />\n    \n                        <label for=\"inProgress\">In Progress</label>\n                        <input type=\"radio\" id=\"inProgress\" name=\"status\" value=\"inProgress\" />\n    \n                        <label for=\"done\">Done</label>\n                        <input type=\"radio\" id=\"done\" name=\"status\" value=\"done\" />\n                    </div>\n                    <input class=\"form__input--submit\" type=\"submit\" value=\"Save changes\">");
            }
          }).join('');
          formEdit.innerHTML = html;
          taskIdEdit = id;
          _context5.next = 19;
          break;

        case 16:
          _context5.prev = 16;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);

        case 19:
          ;

        case 20:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 16]]);
} //Handle Edit


function handleEdit(ev) {
  var _ev$target$elements, title, description, status, tasksData;

  return regeneratorRuntime.async(function handleEdit$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          ev.preventDefault();
          _context6.prev = 1;
          _ev$target$elements = ev.target.elements, title = _ev$target$elements.title, description = _ev$target$elements.description, status = _ev$target$elements.status;
          taskTitle = title.value;
          taskDescription = description.value;
          taskStatus = status.value;

          if (!(!taskTitle || !taskDescription || !taskStatus)) {
            _context6.next = 8;
            break;
          }

          throw new Error("You need to complete all the fields");

        case 8:
          if (modalEdit) {
            _context6.next = 10;
            break;
          }

          throw new Error('There is a problem finding modalEdit from HTML');

        case 10:
          modalEdit.style.display = "none";
          ev.target.reset();
          _context6.next = 14;
          return regeneratorRuntime.awrap(axios.put("/editTask/".concat(taskIdEdit), {
            taskTitle: taskTitle,
            taskDescription: taskDescription,
            taskStatus: taskStatus
          }));

        case 14:
          tasksData = _context6.sent;
          _context6.next = 17;
          return regeneratorRuntime.awrap(location.reload());

        case 17:
          _context6.next = 22;
          break;

        case 19:
          _context6.prev = 19;
          _context6.t0 = _context6["catch"](1);
          console.error(_context6.t0);

        case 22:
          ;

        case 23:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[1, 19]]);
}

;