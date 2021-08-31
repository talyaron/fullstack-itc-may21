"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var Schemas = require('../schemas/schemas');
//imports from the middleweare------------------------>
var userExsistsValid_1 = require("../middlewear/userExsistsValid");
var validateBody_1 = require("../middlewear/validateBody");
var encryptPassword_1 = require("../middlewear/encryptPassword");
var userCookie_1 = require("../middlewear/userCookie");
//import form controlers----------------->
var controlerUsers_1 = require("../controlers/controlerUsers");
router.post('/register', validateBody_1.validateBody(Schemas.registerSchema), userExsistsValid_1.doRegUserExists, encryptPassword_1.encryptPassword, userCookie_1.userCookieWrite, controlerUsers_1.registerUser);
router.post('/login', userCookie_1.userCookieWrite, encryptPassword_1.decryptPassword, controlerUsers_1.login);
module.exports = router;
