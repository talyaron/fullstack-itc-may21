"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../models/taskModel.js'),
    addTask = _require.addTask;

var _require2 = require('../models/taskModel.js'),
    getAllTasks = _require2.getAllTasks;

var _require3 = require('../models/taskModel.js'),
    deleteTask = _require3.deleteTask; //YS: You can import all of them in one line:   const { addTask, getAllTasks, deleteTask } = require('../models/taskModel.js')


router.get('/', function (req, res) {
  try {
    var allTasks = getAllTasks();
    res.send(allTasks);
  } catch (error) {
    res.status(500).send(error.message); //YS: Good
  }
});
router["delete"]('/delete', function (req, res) {
  //YS: Nice
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
  //YS: Good
  try {
    var title = req.body.title;
    var allTask = addTask(title);
    res.send(allTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
}); //router.put('/')
//router.delete

module.exports = router;