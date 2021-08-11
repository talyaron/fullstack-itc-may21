"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var controlerUsers_1 = require("../controlers/controlerUsers");
router.post('/create', controlerUsers_1.newUser);
router.post('/login', controlerUsers_1.login);
router.get('/info', controlerUsers_1.getInfo);
//When the user click to finish the new survey I call this method
router.post('/uploadUserWithSurvey/:uuid', controlerUsers_1.uploadSurvey);
module.exports = router;
