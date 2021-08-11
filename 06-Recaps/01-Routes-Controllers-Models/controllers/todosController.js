const { v4: uuidv4 } = require('uuid');
const { readAllTodos, addTodo, editTodo, deleteTodo, getToDoById } = require('../models/todosModel');

exports.get_all_todos = (req, res) => {
  try {
    const allTodos = readAllTodos();
    res.send(allTodos);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.get_todo_id = (req, res) => {
  try {
    const { id } = req.params;
    const todo = getToDoById(id);
    res.send(todo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


exports.add_todo = (req, res) => {
  try {
    const { text } = req.body;
    const newTodo = {
      id: uuidv4(),
      text,
      dateCreated: Date.now(),
    };

    const todosAdded = addTodo(newTodo);
    res.send(todosAdded);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.delete_todo = (req, res) => {
  try {
    const { todoId } = req.params;
    const deletedTodoArray = deleteTodo(todoId);
    res.send(deletedTodoArray);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.edit_todo = (req, res) => {
  const { todoId } = req.params;
  const { text } = req.body;
  const updatedTodo = editTodo(text, todoId);
  res.send({ todo: updatedTodo });
};
