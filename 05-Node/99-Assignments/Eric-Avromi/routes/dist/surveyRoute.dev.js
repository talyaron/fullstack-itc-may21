"use strict";

var express = require('express');

var router = express.Router(); // const {                                    ///YS: const { addTask, getAllTasks, deleteTask, editTask } = require('../models/taskModel.js')
//     addSurvey
// } = require('../models/surveyModel.js')
// const {
//     getAllSurveys
// } = require('../models/surveyModel.js')
// const {
//     deleteSurvey
// } = require('../models/taskModel.js')
// const {
//     editSurvey
// } = require('../models/surveyModel.js')
// const {
//     editSurvey
// } = require('../models/surveyModel.js')
// const {
//     editSurvey
// } = require('../models/surveyModel.js')
// const {
//     editSurvey
// } = require('../models/surveyModel.js')

router.get('/', function (req, res) {
  try {
    var allSurveys = getAllSurveys();
    res.send(allSurveys);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router["delete"]('/deleteSurvey', function (req, res) {
  try {
    console.log("before id");
    var id = req.query.id;
    var allSurveys = deleteSurvey(id);
    res.send(allSurveys);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router["delete"]('/deleteQuestion', function (req, res) {
  try {
    console.log("before id");
    var id = req.query.id;
    var allQuestions = deleteQuestion(id);
    res.send(allQuestions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.post('/newSurvey', function (req, res) {
  try {
    var title = req.body.title;
    var allSurvey = addSurvey(title);
    res.send(allSurvey);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.post('/newQuestion', function (req, res) {
  try {
    var title = req.body.title;
    var allQuestions = addQuestion(title);
    res.send(allQuestions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.put('/editSurvey', function (req, res) {
  try {
    var newTitle = req.body.newTitle;
    var id = req.body.id;
    console.log(id);
    var allSurveys = editSurvey(id, newTitle);
    console.log("afetr edit task ");
    res.send(allSurveys);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.put('/editQuestion', function (req, res) {
  try {
    var newTitle = req.body.newTitle;
    var id = req.body.id;
    console.log(id);
    var allQuestions = editQuestion(id, newTitle);
    console.log("afetr edit task ");
    res.send(allQuestions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
module.exports = router;