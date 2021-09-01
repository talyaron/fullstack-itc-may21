"use strict";
exports.__esModule = true;
// REQUIRES
var express = require("express");
var router = express.Router();
// CONTROLLERS
var userControllers_1 = require("../controllers/userControllers");
router.post('/register', userControllers_1.registerUser);
module.exports = router;
