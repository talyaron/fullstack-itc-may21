"use strict";
exports.__esModule = true;
// REQUIRES
var express = require("express");
var router = express.Router();
var schemas_1 = require("../schemas/schemas");
var validation_1 = require("../middlewares/validation");
var sendCookie_1 = require("../middlewares/sendCookie");
// CONTROLLERS
var userControllers_1 = require("../controllers/userControllers");
router.post('/register', validation_1.validateUser(schemas_1.schemaUsers), userControllers_1.registerUser);
router.post('/logIn', validation_1.validateUser(schemas_1.schemaLogIn), sendCookie_1.sendCookieUser, userControllers_1.logInUser);
router.get('/getUsers', userControllers_1.getAllUsers);
module.exports = router;
