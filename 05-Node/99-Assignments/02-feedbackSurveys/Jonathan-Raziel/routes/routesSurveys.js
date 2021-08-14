"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var controllersSurvey_1 = require("../controllers/controllersSurvey");
// import {deleteSurveys} from '../controllers/controllersSurvey'
// import {getUniqueId} from '../controllers/controllersSurvey'
// import {getPreviousSurvey} from '../controllers/controllersSurvey'
router.post('/add', controllersSurvey_1.addSurveys);
router.get('/surveys', controllersSurvey_1.getUniqueId);
router.get('/questions', controllersSurvey_1.getUniqueIdQuestions);
router.get('/s/:id', controllersSurvey_1.getPreviousSurvey);
router["delete"]('/user/:id/:email', controllersSurvey_1.deleteSurveys);
module.exports = router;
