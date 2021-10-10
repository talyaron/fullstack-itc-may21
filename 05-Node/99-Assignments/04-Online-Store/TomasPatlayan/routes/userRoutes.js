"use strict";
exports.__esModule = true;
var userController_1 = require("../controllers/userController");
var middlewareUser_1 = require("../middleware/middlewareUser");
var middlewareValidations_1 = require("../middleware/middlewareValidations");
var allSchemas_1 = require("../schemas/allSchemas");
var express = require('express');
var router = express.Router();
router.post('/register', middlewareValidations_1.validateBody(allSchemas_1.registerSchema), middlewareUser_1.userExist, userController_1.userRegister).post('/login', middlewareValidations_1.validateLogin(allSchemas_1.loginSchema), userController_1.userLogin);
module.exports = router;