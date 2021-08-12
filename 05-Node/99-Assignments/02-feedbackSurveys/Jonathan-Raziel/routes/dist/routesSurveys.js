"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var controllersSurvey_1 = require("../controllers/controllersSurvey");
//import {deleteSurveys} from '../controllers/controllersSurvey'
var controllersSurvey_2 = require("../controllers/controllersSurvey");
var controllersSurvey_3 = require("../controllers/controllersSurvey");
router.post('/add', controllersSurvey_1.addSurveys);
router.get('/surveys', controllersSurvey_2.getUniqueId);
router.get('/s/:id', controllersSurvey_3.getPreviousSurvey);
//router.delete('/user/:id/:email', deleteSurveys)
module.exports = router;
