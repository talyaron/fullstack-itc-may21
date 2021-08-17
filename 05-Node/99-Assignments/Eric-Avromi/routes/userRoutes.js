"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var userControllers_1 = require("../controllers/userControllers");
router.post('/user', userControllers_1.register);
router.post('/userLogin', userControllers_1.loginUser);
router.get('/getCookie', userControllers_1.getCookie);
router.get('/show/:email', userControllers_1.getSurveys);
module.exports = router;
