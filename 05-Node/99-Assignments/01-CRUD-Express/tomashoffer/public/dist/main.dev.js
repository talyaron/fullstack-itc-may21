"use strict";

// QUERY SELECTOR 
var deleteIcon = document.querySelector('.delete');
var editIcon = document.querySelector('.edit'); // QUERYSELECTOR

var taskInp = document.querySelector('#task_input');
var dateInp = document.querySelector('#date_input');
var statusInp = document.querySelector('#status_input');
var updTask = []; // FUNCION HANDLE FORM

function handleSubmit(e) {
  e.preventDefault();
  var task = e.target.elements.task.value;
  var date = e.target.elements.date.value;
  var status = e.target.elements.status.value;
  var newTask = {
    task: task,
    date: date,
    status: status
  };
  postTask(newTask);
} // FUNCION HANDLE MODAL


function handleEdit(e) {
  e.preventDefault();
  var task = e.target.elements.taskEdit.value;
  var date = e.target.elements.dateEdit.value;
  var status = e.target.elements.statusEdit.value;
  var updateTask = {
    task: task,
    date: date,
    status: status
  };
  updTask.push(updateTask);
} // FUNCION DE RENDERIZADO


function renderTasks(arr) {
  var root = document.querySelector('.lista-ol');
  var html = '';
  arr.forEach(function (tsk) {
    html += "   <li class=\"list-group-item d-flex justify-content-between align-items-start lista-item\">\n    <div class=\"ms-2 me-auto\">\n        <div class=\"fw-bold\">TASK: ".concat(tsk.task, "</div>\n        <div class=\"fw-bold\">DATE: ").concat(tsk.date, "</div>\n        <div class=\"fw-bold\">STATUS: ").concat(tsk.status, "</div>\n    </div>\n    <i onclick='updateTasks(\"").concat(tsk.id, "\")' data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"edit fas fa-edit fa-lg\"></i>\n    <i onclick='deleteTasks(\"").concat(tsk.id, "\")' class=\"delete far fa-trash-alt fa-lg\"></i>\n    </li>");
  });
  root.innerHTML = html;
} // FUNCION POST DATA


function postTask(task) {
  var response;
  return regeneratorRuntime.async(function postTask$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.post('/tasks', task));

        case 2:
          response = _context.sent;
          renderTasks(response.data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
} // FUNCION DELETE


function deleteTasks(id) {
  var response, responseData;
  return regeneratorRuntime.async(function deleteTasks$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(axios["delete"]("/tasks/".concat(id)));

        case 2:
          response = _context2.sent;
          responseData = response.data;
          console.log(responseData);
          renderTasks(responseData);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
} // FUNCION UPDATE


function updateTasks(id) {
  var newTask, newDate, newStatus, newId, response, responseData;
  return regeneratorRuntime.async(function updateTasks$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          newTask = document.querySelector('#taskName').value;
          newDate = document.querySelector('#dateName').value;
          newStatus = document.querySelector('#statusName').value; // const newTask = updTask[updTask.length - 1].task;
          // const newDate = updTask[updTask.length - 1].date;
          // const newStatus = updTask[updTask.length - 1].status;

          newId = id;
          _context3.next = 6;
          return regeneratorRuntime.awrap(axios.put("/tasks", {
            task: newTask,
            date: newDate,
            status: newStatus,
            id: newId
          }));

        case 6:
          response = _context3.sent;
          responseData = response.data;
          renderTasks(responseData);

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  });
} // FUNCION GET DATA


function getAllTasks() {
  var response;
  return regeneratorRuntime.async(function getAllTasks$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(axios.get('/tasks'));

        case 2:
          response = _context4.sent;
          console.log(response.data);
          renderTasks(response.data);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
}

getAllTasks();