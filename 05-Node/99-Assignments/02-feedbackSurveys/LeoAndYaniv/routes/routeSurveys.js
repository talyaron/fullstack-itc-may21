"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var controlerSurvey_1 = require("../controlers/controlerSurvey");
router.post('/createSurvey/:id', controlerSurvey_1.newSurvey);
router.post('/create/:uuid', controlerSurvey_1.addQuestion);
module.exports = router;
