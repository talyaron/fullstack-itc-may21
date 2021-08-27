"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var logInControllers_1 = require("../controllers/logInControllers");
router.post('/postLogIn', logInControllers_1.logInUser);
module.exports = router;
