const { addTodo } = require('../models/todosModel');

exports.addTodo = (req, res) => {
  console.log(req.decoded.id)
  const newTodo = {
    addedBy: req.decoded.id,
    text: req.body.todo,
  };
  const allTodos = addTodo(newTodo);
  res.send(allTodos);
};
