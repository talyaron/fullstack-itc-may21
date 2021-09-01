"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var usersController_1 = require("../controllers/usersController");
var userSchema_1 = require("../schemas/userSchema");
var validateBodyUser_1 = require("../middleware/validateBodyUser");
router
    .get('/allUsers', usersController_1.get_users)
    .post('/addUser', validateBodyUser_1.validateBodyUser(userSchema_1.userSchemaAJV), usersController_1.add_user);
module.exports = router;
