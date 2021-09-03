"use strict";

var noteText = document.querySelector('#text');
var submitBtn = document.querySelector('#submit');
var todosContainer = document.querySelector('#todosContainer');
var token = JSON.parse(localStorage.getItem('token'));

var handleNewUser = function handleNewUser(e) {
  var noteText, todo;
  return regeneratorRuntime.async(function handleNewUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          noteText = document.querySelector('#text');
          todo = noteText.value;
          _context.next = 5;
          return regeneratorRuntime.awrap(addTodo(todo));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

var renderTodos = function renderTodos(todosArray) {
  todosContainer.innerHTML = '';
  todosArray.forEach(function (todo) {
    var todoHtml = "<div id='todo'>\n                        <h3>".concat(todo.text, "</h3>\n                        <p>createdBy: ").concat(todo.text, "</p>\n                      </div>");
    todosContainer.insertAdjacentHTML('afterbegin', todoHtml);
  });
};

var addTodo = function addTodo(todo) {
  var headers, response;
  return regeneratorRuntime.async(function addTodo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          headers = {
            Authorization: "Bearer ".concat(token)
          };
          _context2.next = 4;
          return regeneratorRuntime.awrap(axios.post('todos/addTodo', {
            todo: todo
          }, {
            headers: headers
          }));

        case 4:
          response = _context2.sent;
          renderTodos(response.data);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

submitBtn.addEventListener('click', function (e) {
  return handleNewUser(e);
});