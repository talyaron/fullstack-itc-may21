"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/*
This is the client side main js file.

Functions:
- Add task
- Render tasks
- Update task
- Delete task
- Handle "Done"
- Init func to update the tasks each time
*/
// The tasks array
var tasks = [];
/* Add */

var form = document.querySelector('#add-task-form');
var modal = document.querySelector('.add-task-modal');
form.addEventListener('submit', handleSubmit);

function handleSubmit(ev) {
  var taskText, newTask;
  return regeneratorRuntime.async(function handleSubmit$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ev.preventDefault();
          taskText = ev.target[0].value;

          if (taskText) {
            _context.next = 4;
            break;
          }

          throw new Error('Please enter description.');

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(postTask(taskText));

        case 6:
          newTask = _context.sent;
          tasks.push(newTask);
          renderTaskList();
          modal.classList.add('hide');
          ev.target.reset();

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}
/* Render */


var renderTaskList = function renderTaskList() {
  // Check if task is done, to add the class "done"
  function checkIsDone(isDone) {
    if (isDone) {
      return "done";
    }
  }

  var taskHtml = tasks.map(function (task) {
    return "\n<div class=\"task-wrapper\">\n    <div class=\"task\">  \n        <div class=\"task__done-button\">\n            <img src=\"./images/sword.png\" alt=\"Done\" onclick='toggleDone(\"".concat(task.id, "\")'>\n        </div>\n        <p class=\"task__text ").concat(checkIsDone(task.isDone), "\">").concat(task.text, "</p>\n        <div class=\"task__buttons-wrapper\">\n            <div class=\"edit-button-wrapper\">\n                <i onclick='getIdForUpdate(\"").concat(task.id, "\")' class=\"fas fa-pencil-alt fa-lg\"></i>\n            </div>\n            <div class=\"delete-button-wrapper\">\n                <i onclick='handleDelete(\"").concat(task.id, "\")' class=\"fas fa-trash fa-lg\"></i>\n            </div>\n        </div>\n    </div>\n</div> \n");
  }).join('');
  document.querySelector('.list__body').innerHTML = taskHtml;
};
/* Update */


function getIdForUpdate(taskId) {
  var id = document.querySelector('#task-id');
  id.value = taskId;
  openEditModal();
  var taskToUpdate = tasks.find(function (task) {
    return task.id === taskId;
  });
  return taskToUpdate.id;
}

function handleUpdate(ev) {
  var taskId, taskIndex, taskToUpdate, updatedTask;
  return regeneratorRuntime.async(function handleUpdate$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          ev.preventDefault();
          taskId = document.querySelector('#task-id').value;
          taskIndex = tasks.findIndex(function (task) {
            return task.id === taskId;
          });
          taskToUpdate = tasks[taskIndex];
          taskToUpdate.text = ev.target.elements[0].value;
          console.log(taskToUpdate);
          _context2.next = 8;
          return regeneratorRuntime.awrap(putTask(taskToUpdate));

        case 8:
          updatedTask = _context2.sent;
          tasks[taskIndex] = updatedTask;
          ev.target.reset();
          closeEditModal();
          renderTaskList();

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  });
}
/* Delete */


function handleDelete(taskId) {
  var taskToDelete, tasksAfterDelete;
  return regeneratorRuntime.async(function handleDelete$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          taskToDelete = tasks.find(function (task) {
            return task.id === taskId;
          });
          console.dir(taskToDelete);
          _context3.next = 4;
          return regeneratorRuntime.awrap(deleteTask(taskToDelete.id));

        case 4:
          tasksAfterDelete = _context3.sent;
          tasks.splice(0, tasks.length);
          tasks.push.apply(tasks, _toConsumableArray(tasksAfterDelete));
          console.log(tasks);
          renderTaskList();

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  });
} // Handle done:


function toggleDone(taskId) {
  var taskIndex, task, updatedTask;
  return regeneratorRuntime.async(function toggleDone$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          taskIndex = tasks.findIndex(function (task) {
            return task.id === taskId;
          });
          task = tasks[taskIndex];
          task.isDone = !task.isDone;
          _context4.next = 5;
          return regeneratorRuntime.awrap(putTask(task));

        case 5:
          updatedTask = _context4.sent;
          tasks[taskIndex] = updatedTask;
          renderTaskList();

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
} // Initiation func for getting tasks and rendering


function init() {
  var arr;
  return regeneratorRuntime.async(function init$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(getAllTasks());

        case 2:
          arr = _context5.sent;
          tasks.push.apply(tasks, _toConsumableArray(arr));
          renderTaskList();
          console.log(tasks);

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  });
}

init();