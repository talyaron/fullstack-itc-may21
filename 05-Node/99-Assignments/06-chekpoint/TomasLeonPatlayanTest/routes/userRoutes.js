"use strict";
exports.__esModule = true;
var userControllers_1 = require("../controllers/userControllers");
var validationMiddleware_1 = require("../middlewares/validationMiddleware");
var userSchema_1 = require("../schemas/userSchema");
var express = require('express');
var router = express.Router();
router.post('/postUser', validationMiddleware_1.validateDataBook(userSchema_1.schemaBook), userControllers_1.createUser)
    .get('/getUsers', userControllers_1.getAllUsers)
    .put('/searchBook', userControllers_1.searchBooksData);
module.exports = router;
