"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
This is the client side main js file.
*/
var Task =
/*#__PURE__*/
function () {
  function Task(text) {
    _classCallCheck(this, Task);

    this.text = text;
    this.id = Math.random().toString(16).slice(2);
    this.isDone = false;
  }

  _createClass(Task, [{
    key: "update",
    value: function update(newTask) {
      this.text = newTask.text;
    }
  }]);

  return Task;
}(); // The tasks array


var tasks = [];
/* Add */

var form = document.querySelector('#add-task-form');
var modal = document.querySelector('.add-task-modal');
form.addEventListener('submit', handleSubmit);

function handleSubmit(ev) {
  ev.preventDefault();
  var taskText = ev.target[0].value;
  if (!taskText) throw new Error('Please enter description.');
  var newTask = new Task(taskText);
  tasks.push(newTask);
  console.log(tasks);
  renderTaskList();
  modal.classList.add('hide');
  ev.target.reset();
}
/* Render */


var renderTaskList = function renderTaskList() {
  function checkIsDone(isDone) {
    if (isDone) {
      return "done";
    }
  }

  var taskHtml = tasks.map(function (task) {
    return "\n<div class=\"task\" draggable=\"true\">  \n    <div class=\"task__done-button\">\n        <img src=\"./images/sword.png\" alt=\"Done\" onclick='toggleDone(\"".concat(task.id, "\")'>\n    </div>\n    <p class=\"task__text ").concat(checkIsDone(task.isDone), "\">").concat(task.text, "</p>\n    <div class=\"task__buttons-wrapper\">\n        <div class=\"edit-button-wrapper\">\n            <i onclick='getIdForUpdate(\"").concat(task.id, "\")' class=\"fas fa-pencil-alt fa-lg\"></i>\n        </div>\n        <div class=\"delete-button-wrapper\">\n            <i onclick='handleDelete(\"").concat(task.id, "\")' class=\"fas fa-trash fa-lg\"></i>\n        </div>\n    </div>\n</div> \n");
  }).join('');
  document.querySelector('.list__body').innerHTML = taskHtml;
}; // async function getAllTasks() {
//     try {
//         const tasksData = await axios.get('/getAllTasks');
//         renderTask(tasksData.data);
//     } catch (error) {
//         console.log(error);
//     }
// }

/* Update */


function getIdForUpdate(taskId) {
  openEditModal();
  var taskToUpdate = tasks.find(function (task) {
    return task.id === taskId;
  });
  return taskToUpdate.id;
}

function handleUpdate(ev) {
  ev.preventDefault();
  ev.target.reset();
}
/* Delete */


function handleDelete(taskId) {
  var taskToDelete = tasks.find(function (task) {
    return task.id === taskId;
  });
  var filteredTasks = tasks.filter(function (task) {
    return task.id !== taskToDelete.id;
  });
  tasks = filteredTasks;
  renderTaskList();
}
/* Send info to server with axios */
// Handle done:


function toggleDone(taskId) {
  var task = tasks.find(function (task) {
    return task.id === taskId;
  });
  task.isDone = !task.isDone;
  renderTaskList();
}