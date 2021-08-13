"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var UserCookie_1 = require("../middlewares/UserCookie");
var controlerUsers_1 = require("../controlers/controlerUsers");
router.post('/register', controlerUsers_1.newUser, UserCookie_1.userCookieWrite);
router.post('/login', controlerUsers_1.login, UserCookie_1.userCookieWrite);
router.get('/info', UserCookie_1.userCookieRead);
//When the user click to finish the new survey I call this method
router.post('/uploadUserWithSurvey/:uuid', UserCookie_1.userCookieRead, controlerUsers_1.uploadSurvey);
module.exports = router;
