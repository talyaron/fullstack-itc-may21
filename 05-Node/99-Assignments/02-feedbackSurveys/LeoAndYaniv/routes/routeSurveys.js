"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var UserCookie_1 = require("../middlewares/UserCookie");
var controlerSurvey_1 = require("../controlers/controlerSurvey");
//When the user click to start a new survey I call this method
router.post('/createSurvey/:admin', controlerSurvey_1.newSurvey);
router.get('/getSurveys/:admin', UserCookie_1.userCookieRead, controlerSurvey_1.getSurveys);
router["delete"]('/deleteSurvey/:uuid', UserCookie_1.userCookieRead, controlerSurvey_1.deleteSurvey);
router.post('/createQuestion/:uuid', controlerSurvey_1.addQuestion);
router.put('/editQuestion/:qUuid/:uuid', UserCookie_1.userCookieRead, controlerSurvey_1.editQuestion);
router["delete"]('/deleteQuestion/:qUuid/:uuid', UserCookie_1.userCookieRead, controlerSurvey_1.deleteQuestion);
router.get('/getQuestions/:uuid', controlerSurvey_1.getQuestionsSurvey);
router.put('/updateQuestions/:uuid', controlerSurvey_1.updateQuestionsSurvey);
module.exports = router;
