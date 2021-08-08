"use strict";

function postTask(text) {
  var res;
  return regeneratorRuntime.async(function postTask$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.post('http://localhost:3000/tasks', {
            text: text
          }));

        case 2:
          res = _context.sent;
          console.log(res);
          return _context.abrupt("return", res.data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

function putTask(text) {
  var res;
  return regeneratorRuntime.async(function putTask$(_context2) {
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
}

function getAllTasks() {
  var tasksData;
  return regeneratorRuntime.async(function getAllTasks$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(axios.get('/tasks'));

        case 2:
          tasksData = _context3.sent;
          return _context3.abrupt("return", tasksData.data);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}