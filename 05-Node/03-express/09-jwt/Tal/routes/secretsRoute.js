"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var passwordsControls_1 = require("../controlers/passwordsControls");
router.get('/getAllPasswords', passwordsControls_1.passwordsControl);
module.exports = router;
