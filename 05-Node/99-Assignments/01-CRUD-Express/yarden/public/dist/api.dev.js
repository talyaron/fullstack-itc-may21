"use strict";

/* CRUD API operations with Axios */
// GET
function getAllTasks() {
  var tasksData;
  return regeneratorRuntime.async(function getAllTasks$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get('http://localhost:3000/tasks'));

        case 2:
          tasksData = _context.sent;
          return _context.abrupt("return", tasksData.data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
} // POST


function postTask(text) {
  var res;
  return regeneratorRuntime.async(function postTask$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(axios.post('http://localhost:3000/tasks', {
            text: text
          }));

        case 2:
          res = _context2.sent;
          console.log(res);
          return _context2.abrupt("return", res.data);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
} // PUT


function putTask(task) {
  var res;
  return regeneratorRuntime.async(function putTask$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(axios.put('http://localhost:3000/tasks', {
            task: task
          }));

        case 2:
          res = _context3.sent;
          console.log(res);
          return _context3.abrupt("return", res.data);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
} // DELETE


function deleteTask(taskId) {
  var res;
  return regeneratorRuntime.async(function deleteTask$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(axios["delete"]("http://localhost:3000/tasks/".concat(taskId)));

        case 2:
          res = _context4.sent;
          console.log(res);
          return _context4.abrupt("return", res.data);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
}