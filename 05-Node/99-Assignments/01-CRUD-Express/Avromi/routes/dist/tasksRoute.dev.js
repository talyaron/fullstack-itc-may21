"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../models/taskModel.js'),
    addTask = _require.addTask;

var _require2 = require('../models/taskModel.js'),
    getAllTasks = _require2.getAllTasks;

var _require3 = require('../models/taskModel.js'),
    deleteTask = _require3.deleteTask;

var _require4 = require('../models/taskModel.js'),
    editTask = _require4.editTask;

router.get('/', function (req, res) {
  try {
    var allTasks = getAllTasks();
    res.send(allTasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router["delete"]('/delete', function (req, res) {
  try {
    console.log("before id");
    var id = req.query.id;
    var allTasks = deleteTask(id);
    res.send(allTasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.post('/newTask', function (req, res) {
  try {
    var title = req.body.title;
    var allTask = addTask(title);
    res.send(allTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.put('/editTask', function (req, res) {
  try {
    var newTitle = req.body.newTitle;
    var id = req.body.id;
    console.log(id);
    var allTasks = editTask(id, newTitle);
    console.log("afetr edit task ");
    res.send(allTasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
module.exports = router;