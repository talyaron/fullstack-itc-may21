const fs = require('fs');
const path = require('path');
const todosJsonPath = path.resolve(__dirname, './todos.json');

const readAllTodos = () => {
  try {
    const allTodos = fs.readFileSync(todosJsonPath);
    const allTodosParsed = JSON.parse(allTodos);
    return allTodosParsed;
  } catch (err) {
    return err.message;
  }
};

const addTodo = (todo) => {
  try {
    const allTodos = readAllTodos();
    allTodos.push(todo);
    fs.writeFileSync(todosJsonPath, JSON.stringify(allTodos));
    return allTodos;
  } catch (err) {
    return err.message;
  }
};

const editTodo = (todoData, id) => {
  try {
    const alltodos = readalltodos();
    const todoToEdit = alltodos.find((todo) => todo.id === id);
    todoToEdit.text = todoData.text;
    fs.writeFileSync(todosJsonPath, JSON.stringify(todoToEdit));
    return allUsers;
  } catch (err) {
    return err.message;
  }
};

const deleteTodo = (id) => {
  try {
    const allTodos = readAllTodos();
    const todoToEdit = allTodos.filter((todo) => todo.id !== id);
    fs.writeFileSync(todosJsonPath, JSON.stringify(todoToEdit));
    return todoToEdit;
  } catch (err) {
    return err.message;
  }
};

const getToDoById = (id) => {
  try {
    const allTodos = readAllTodos();
    const todoById = allTodos.find((todo) => todo.id === id);
    return todoById;
  } catch (err) {}
};

module.exports = { readAllTodos, addTodo, editTodo, deleteTodo, getToDoById };
