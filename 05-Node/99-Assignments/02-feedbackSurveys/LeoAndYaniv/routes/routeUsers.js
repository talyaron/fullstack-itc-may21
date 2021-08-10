"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var controlerUsers_1 = require("../controlers/controlerUsers");
router.post('/create', controlerUsers_1.newUser);
router.post('/login', controlerUsers_1.login);
module.exports = router;
