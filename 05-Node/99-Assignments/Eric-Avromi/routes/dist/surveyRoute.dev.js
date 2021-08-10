"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../models/surveyModel.js'),
    addSurvey = _require.addSurvey;

var _require2 = require('../models/surveyModel.js'),
    getAllSurveys = _require2.getAllSurveys;

var _require3 = require('../models/taskModel.js'),
    deleteSurvey = _require3.deleteSurvey;

var _require4 = require('../models/surveyModel.js'),
    editSurvey = _require4.editSurvey;

router.get('/', function (req, res) {
  try {
    var allTasks = getAllTasks();
    res.send(allTasks);
  } catch (error) {
    res.status(500).send(error.message); //YS: Good
  }
});
router["delete"]('/deleteSurvey', function (req, res) {
  //YS: Nice
  try {
    console.log("before id");
    var id = req.query.id;
    var allTasks = deleteSurvey(id);
    res.send(allTasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router["delete"]('/deleteQuestion', function (req, res) {
  //YS: Nice
  try {
    console.log("before id");
    var id = req.query.id;
    var allTasks = deleteQuestion(id);
    res.send(allTasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.post('/newSurvey', function (req, res) {
  //YS: Good
  try {
    var title = req.body.title;
    var allTask = addSurvey(title);
    res.send(allTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.post('/newQuestion', function (req, res) {
  //YS: Good
  try {
    var title = req.body.title;
    var allTask = addQuestion(title);
    res.send(allTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.put('/editSurvey', function (req, res) {
  try {
    var newTitle = req.body.newTitle;
    var id = req.body.id; //YS: Should pass the id through params/query

    console.log(id);
    var allTasks = editSurvey(id, newTitle);
    console.log("afetr edit task ");
    res.send(allTasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.put('/editQuestion', function (req, res) {
  try {
    var newTitle = req.body.newTitle;
    var id = req.body.id; //YS: Should pass the id through params/query

    console.log(id);
    var allTasks = editQuestion(id, newTitle);
    console.log("afetr edit task ");
    res.send(allTasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
module.exports = router;