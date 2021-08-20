"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
//I import the function of the Middlewares that I going to use here
var UserCookie_1 = require("../middlewares/UserCookie");
var isAdmin_1 = require("../middlewares/isAdmin");
//I import the function of the Controlers that Im going to use here
var controlerUsers_1 = require("../controlers/controlerUsers");
router.post('/register', UserCookie_1.userCookieWrite, controlerUsers_1.newUser);
router.get('/username/:email', controlerUsers_1.findUsername);
router.post('/login', UserCookie_1.userCookieWrite, controlerUsers_1.login);
router.get('/info', UserCookie_1.userCookieRead, controlerUsers_1.sendCookie);
//When the user click to finish the new survey I call this method
router.post('/uploadUserWithSurvey/:uuid', UserCookie_1.userCookieRead, isAdmin_1.isAdmin, controlerUsers_1.uploadSurvey);
router.post('/answerLoginBefore', UserCookie_1.userCookieWrite, controlerUsers_1.sendCookie);
router.post('/answerLoginAfter/:uuid', UserCookie_1.userCookieRead, controlerUsers_1.answerLogin);
router["delete"]('/deleteSurvey/:uuid', UserCookie_1.userCookieRead, controlerUsers_1.deleteSurveyUser);
module.exports = router;
