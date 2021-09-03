var fs = require('fs');
var path = require('path');
var pathToTodosJson = path.resolve(__dirname, '../db/todos.json');
var readAllTodos = function () {
    var allTodos = fs.readFileSync(pathToTodosJson);
    return JSON.parse(allTodos);
};
var addTodo = function (todo) {
    var allTodos = readAllTodos();
    allTodos.push(todo);
    fs.writeFileSync(pathToTodosJson, JSON.stringify(allTodos));
    return allTodos;
};
module.exports = { readAllTodos: readAllTodos, addTodo: addTodo };
