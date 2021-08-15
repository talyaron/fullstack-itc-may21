"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var UserCookie_1 = require("../middlewares/UserCookie");
var controlerSurvey_1 = require("../controlers/controlerSurvey");
//When the user click to start a new survey I call this method
router.route('/survey/:uuid')
    .post(UserCookie_1.userCookieRead, controlerSurvey_1.newSurvey) // for admins
    .get(UserCookie_1.userCookieRead, controlerSurvey_1.getSurveys) // for admins
["delete"](UserCookie_1.userCookieRead, controlerSurvey_1.deleteSurvey); // for admins
router.route('/question/:uuid/:qUuid')
    .post(controlerSurvey_1.addQuestion) // for admins
    .put(UserCookie_1.userCookieRead, controlerSurvey_1.editQuestion) // for admins
["delete"](UserCookie_1.userCookieRead, controlerSurvey_1.deleteQuestion); // for admins
router.route('/questions/:uuid')
    .get(controlerSurvey_1.getQuestionsSurvey)
    .put(controlerSurvey_1.updateQuestionsSurvey);
module.exports = router;
