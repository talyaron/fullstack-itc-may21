"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var signUpControllers_1 = require("../controllers/signUpControllers");
router.post('/registerUser', signUpControllers_1.registerUser);
module.exports = router;
