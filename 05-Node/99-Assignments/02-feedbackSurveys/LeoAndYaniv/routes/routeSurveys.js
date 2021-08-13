"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var UserCookie_1 = require("../middlewares/UserCookie");
var controlerSurvey_1 = require("../controlers/controlerSurvey");
//When the user click to start a new survey I call this method
router.post('/createSurvey/:id', controlerSurvey_1.newSurvey);
router.post('/create/:uuid', controlerSurvey_1.addQuestion);
router.get('/getQuestions/:uuid', controlerSurvey_1.getQuestionsSurvey);
router["delete"]('/deleteQuestion/:id/:uuid', UserCookie_1.userCookieRead, controlerSurvey_1.deleteQuestion);
router["delete"]('/deleteSurvey/:uuid', controlerSurvey_1.deleteSurvey);
router.get('/getSurveys/:emailLogIn', UserCookie_1.userCookieRead, controlerSurvey_1.getSurveys);
module.exports = router;
