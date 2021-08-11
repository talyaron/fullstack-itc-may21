"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var controllersSurvey_1 = require("../controllers/controllersSurvey");
//import {deleteSurveys} from '../controllers/controllersSurvey'
router.post('/add', controllersSurvey_1.addSurveys);
//router.delete('/user/:id/:email', deleteSurveys)
module.exports = router;
