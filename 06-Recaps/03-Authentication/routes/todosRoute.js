const express = require('express');
const router = express.Router();
const TodosController = require('../controllers/TodosController');
const { auth } = require('../middleware/auth');

router.post('/addTodo', auth, TodosController.addTodo);

module.exports = router;
