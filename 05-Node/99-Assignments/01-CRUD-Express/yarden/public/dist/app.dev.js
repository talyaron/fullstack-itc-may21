"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
This is the client side main js file.
*/
var Task = function Task(text) {
  _classCallCheck(this, Task);

  this.text = text;
  this.id = Math.random().toString(16).slice(2);
}; // The tasks array


var tasks = [];
/* Add */

var form = document.querySelector('#add-task-form');
form.addEventListener('submit', handleSubmit());

var handleSubmit = function handleSubmit(ev) {
  ev.preventDefault();
  var taskText = ev.target[0].value;
  var newTask = new Task(taskText);
  addTask(newTask);
  renderTaskList();
};

var addTask = function addTask(tasks) {
  return tasks.unshift(newTask);
};
/* Render */


var renderTaskList = function renderTaskList(tasks) {
  var taskHtml = tasks.map(function (task) {
    return "\n<div class=\"task\">\n<div class=\"task__done-button\">\n    <img src=\"./images/sword.png\" alt=\"\">\n</div>\n<p class=\"task__text\">".concat(task.text, "</p>\n<div class=\"task__buttons-wrapper\">\n    <div class=\"edit-button-wrapper\">\n        <i onclick='handleUpdate(\"").concat(task.id, "\")' class=\"fas fa-pencil-alt fa-lg\"></i>\n    </div>\n    <div class=\"delete-button-wrapper\">\n        <i onclick='handleDelete(\"").concat(task.id, "\")' class=\"fas fa-trash fa-lg\"></i>\n    </div>\n</div>\n</div> \n").join('');
  });
};
/* Update */


var handleUpdate = function handleUpdate(ev) {};

var updateTask = function updateTask(ev) {};
/* Delete */


var handleDelete = function handleDelete(ev) {};

var deleteTask = function deleteTask(ev) {};
/* Send info to server with axios */