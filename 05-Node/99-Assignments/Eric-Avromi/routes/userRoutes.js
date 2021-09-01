"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var userControllers_1 = require("../controllers/userControllers");
router.post('/user', userControllers_1.usersRegister);
router.post('/userLogin', userControllers_1.loginUser);
router.post('/endUserLogin', userControllers_1.endUserLogin);
router.get('/getCookie', userControllers_1.getCookie);
router.get('/show/:email', userControllers_1.getSurveys);
router.post('/add/:id', userControllers_1.scoreAdd);
module.exports = router;
