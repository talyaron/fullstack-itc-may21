"use strict";
exports.__esModule = true;
var surveyControllers_1 = require("../../../02-feedbackSurveys/Hoffer-Patlayan/controllers/surveyControllers");
var controllersStudent_1 = require("../controlers/controllersStudent");
var express = require('express');
var router = express.Router();
router.get('/all_student', controllersStudent_1.getStudent).post('/add_student', surveyControllers_1.addSurveys);
module.exports = router;
