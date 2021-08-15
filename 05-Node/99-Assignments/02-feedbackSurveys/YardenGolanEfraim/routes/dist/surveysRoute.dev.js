"use strict";

var express = require("express");

var router = express.Router();

var surveysController = require("../controllers/surveysController");

router.get('/sendSurvey', surveysController.send_survey);
router.post('/addSurvey', surveysController.add_survey);
router.get('/getSurvey', surveysController.get_survey);
router.get('/surveyToAnswer', surveysController.survey_to_answer);
module.exports = router;