"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../models/taskModel.js'),
    addTask = _require.addTask;

var _require2 = require('../models/taskModel.js'),
    getAllTasks = _require2.getAllTasks;

router.post('/newTask', function (req, res) {
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