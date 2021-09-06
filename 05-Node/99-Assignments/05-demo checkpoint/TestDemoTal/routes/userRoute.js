"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var userControllers_1 = require("../controller/userControllers");
var validationMiddleware_1 = require("../middleware/validationMiddleware");
var userSchemas_1 = require("../schemas/userSchemas");
router.post('/register', validationMiddleware_1.validateUser(userSchemas_1.userSchema), userControllers_1.registerUser).get('/getAllUsers', userControllers_1.getAllUser);
module.exports = router;
