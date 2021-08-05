"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
This is the client side main js file.
*/
var Task = function Task(text) {
  _classCallCheck(this, Task);

  this.text = text;
  this.id = Math.random().toString(16).slice(2);
  this.isDone = false;
}; // The tasks array


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
  tasks.unshift(newTask);
  console.log(tasks);
  renderTaskList();
  modal.classList.add('hide');
}
/* Render */


var renderTaskList = function renderTaskList() {
  function checkIsDone(isDone) {
    if (isDone) {
      return "done";
    }
  }

  var taskHtml = tasks.map(function (task) {
    return "\n<div class=\"task\" draggable=\"true\">  \n    <div class=\"task__done-button\">\n        <img src=\"./images/sword.png\" alt=\"Done\" onclick='toggleDone(\"".concat(task.id, "\")'>\n    </div>\n    <p class=\"task__text ").concat(checkIsDone(task.isDone), "\">").concat(task.text, "</p>\n    <div class=\"task__buttons-wrapper\">\n        <div class=\"edit-button-wrapper\">\n            <i onclick='handleUpdate(\"").concat(task.id, "\")' class=\"fas fa-pencil-alt fa-lg\"></i>\n        </div>\n        <div class=\"delete-button-wrapper\">\n            <i onclick='handleDelete(\"").concat(task.id, "\")' class=\"fas fa-trash fa-lg\"></i>\n        </div>\n    </div>\n</div> \n");
  }).join('');
  document.querySelector('.list__body').innerHTML = taskHtml;
};
/* Update */


function handleUpdate(ev) {}

var updateTask = function updateTask(ev) {};
/* Delete */


function handleDelete(ev) {}

var deleteTask = function deleteTask(ev) {};
/* Send info to server with axios */
// Handle done:


function toggleDone(taskId) {
  var task = tasks.find(function (task) {
    return task.id === taskId;
  });
  task.isDone = !task.isDone;
  renderTaskList();
}