const fs = require('fs');
const path = require('path');
const pathToTodosJson = path.resolve(__dirname, '../db/todos.json');

const readAllTodos = () => {
  const allTodos = fs.readFileSync(pathToTodosJson);
  return JSON.parse(allTodos);
};

const addTodo = (todo) => {
  const allTodos = readAllTodos();
  allTodos.push(todo);
  fs.writeFileSync(pathToTodosJson, JSON.stringify(allTodos));
  return allTodos;
};

module.exports = {readAllTodos, addTodo}
