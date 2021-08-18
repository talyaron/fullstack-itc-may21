"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var UserCookie_1 = require("../middlewares/UserCookie");
var isAdmin_1 = require("../middlewares/isAdmin");
var controlerSurvey_1 = require("../controlers/controlerSurvey");
//When the user click to start a new survey I call this method
router.route('/survey/:uuid')
    .post(UserCookie_1.userCookieRead, isAdmin_1.isAdmin, controlerSurvey_1.newSurvey)
    .get(UserCookie_1.userCookieRead, isAdmin_1.isAdmin, controlerSurvey_1.getSurveys)["delete"](UserCookie_1.userCookieRead, isAdmin_1.isAdmin, controlerSurvey_1.deleteSurvey);
router.route('/question/:uuid/:qUuid')
    .post(UserCookie_1.userCookieRead, isAdmin_1.isAdmin, controlerSurvey_1.addQuestion)
    .put(UserCookie_1.userCookieRead, isAdmin_1.isAdmin, controlerSurvey_1.editQuestion)["delete"](UserCookie_1.userCookieRead, isAdmin_1.isAdmin, controlerSurvey_1.deleteQuestion);
router.route('/questions/:uuid')
    .get(controlerSurvey_1.getQuestionsSurvey)
    .put(controlerSurvey_1.updateQuestionsSurvey);
module.exports = router;
//We comment the middleware "idAdmin" because it was causing problems and we didnt have enought time to figure out
