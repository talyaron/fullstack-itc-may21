const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todosController");

router
.route('/')
.get(todosController.get_all_todos)
.post(todosController.add_todo);


router
.route("/:todoId")
.get(todosController.get_all_todos)
.delete( t.dosController.delete_todo)
.put(todosController.edit_todo);

module.exports = router;
