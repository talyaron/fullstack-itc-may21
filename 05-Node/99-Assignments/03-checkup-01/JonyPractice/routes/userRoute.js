"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var userControllers_1 = require("../controllers/userControllers");
var doesUserExist_1 = require("../middleware/doesUserExist");
var encryptPwd_1 = require("../middleware/encryptPwd");
var sendCookie_1 = require("../middleware/sendCookie");
router.post('/register', doesUserExist_1.doesUserExist, encryptPwd_1.encryptPwd, sendCookie_1.sendCookie, userControllers_1.register)
    .post('/login', userControllers_1.login);
module.exports = router;
