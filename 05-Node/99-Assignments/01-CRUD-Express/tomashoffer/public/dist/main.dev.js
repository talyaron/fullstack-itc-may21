"use strict";

// QUERY SELECTOR 
var deleteIcon = document.querySelector('.delete');
var editIcon = document.querySelector('.edit'); // QUERYSELECTOR

var taskInp = document.querySelector('#task_input');
var dateInp = document.querySelector('#date_input');
var statusInp = document.querySelector('#status_input'); // FUNCION HANDLE FORM

function handleSubmit(e) {
  e.preventDefault();

  try {
    var task = e.target.elements.task.value;
    var date = e.target.elements.date.value;
    var status = e.target.elements.status.value;
    var newTask = {
      task: task,
      date: date,
      status: status
    };
    postTask(newTask);
  } catch (error) {
    console.error(error);
  }
} // FUNCION DE RENDERIZADO


function renderTasks(arr) {
  try {
    if (!Array.isArray(arr)) throw new error('For render its must be an array!');
    var root = document.querySelector('.lista-ol');
    var html = '';
    arr.forEach(function (tsk) {
      html += "   <li class=\"list-group-item d-flex justify-content-between align-items-start lista-item\">\n    <div class=\"ms-2 me-auto\">\n        <div class=\"fw-bold\">TASK: ".concat(tsk.task, "</div>\n        <div class=\"fw-bold\">DATE: ").concat(tsk.date, "</div>\n        <div class=\"fw-bold\">STATUS: ").concat(tsk.status, "</div>\n    </div>\n    <i onclick='setCurrentId(\"").concat(tsk.id, "\")' data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"edit fas fa-edit fa-lg\"></i>\n    <i onclick='deleteTasks(\"").concat(tsk.id, "\")' class=\"delete far fa-trash-alt fa-lg\"></i>\n    </li>");
    });
    root.innerHTML = html;
  } catch (e) {
    console.error(e);
  }
} // FUNCION POST DATA


function postTask(task) {
  var response;
  return regeneratorRuntime.async(function postTask$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.post('/tasks', task));

        case 3:
          response = _context.sent;
          renderTasks(response.data);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
} // FUNCION DELETE


function deleteTasks(id) {
  var response, responseData;
  return regeneratorRuntime.async(function deleteTasks$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;

          if (id) {
            _context2.next = 3;
            break;
          }

          throw new error('We need an ID for the delete');

        case 3:
          _context2.next = 5;
          return regeneratorRuntime.awrap(axios["delete"]("/tasks/".concat(id)));

        case 5:
          response = _context2.sent;
          responseData = response.data;
          console.log(responseData);
          renderTasks(responseData);
          _context2.next = 14;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
}

var currentId;

function setCurrentId(id) {
  currentId = id;
} // FUNCION HANDLE MODAL


function handleEdit(e) {
  var id, taskEdit, dateEdit, statusEdit, updateTask, response, responseData;
  return regeneratorRuntime.async(function handleEdit$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          e.preventDefault();
          _context3.prev = 1;
          id = currentId;
          taskEdit = document.querySelector('#taskName').value;
          dateEdit = document.querySelector('#dateName').value;
          statusEdit = document.querySelector('#statusName').value;
          updateTask = {
            taskEdit: taskEdit,
            dateEdit: dateEdit,
            statusEdit: statusEdit,
            id: id
          };
          console.log(updateTask);
          _context3.next = 10;
          return regeneratorRuntime.awrap(axios.put("/tasks", updateTask));

        case 10:
          response = _context3.sent;
          responseData = response.data;
          console.log(response.data);
          renderTasks(responseData);
          _context3.next = 19;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](1);
          console.error(_context3.t0);

        case 19:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 16]]);
} // FUNCION GET DATA WITH PROMISE


function getAllTasks() {
  return regeneratorRuntime.async(function getAllTasks$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", new Promise(function (resolve, reject) {
            fetch('/tasks').then(function (response) {
              return response.json();
            }).then(function (response) {
              resolve(response.data);
              renderTasks(response.data);
            })["catch"](function (e) {
              reject(e);
            });
          }));

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
}

getAllTasks();