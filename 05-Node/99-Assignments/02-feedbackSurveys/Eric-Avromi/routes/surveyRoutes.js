"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var surveyControllers_1 = require("../controllers/surveyControllers");
router.post('/add', surveyControllers_1.addSurveys);
router.get('/surveys', surveyControllers_1.getUniqueId);
router.get('/questions', surveyControllers_1.getUniqueIdQuestions);
router.get('/getSurvey/:id', surveyControllers_1.getPreviousSurvey);
router["delete"]('/user/:id/:email', surveyControllers_1.deleteSurveys);
module.exports = router;
