"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var userControllers_1 = require("../controllers/userControllers");
var validationSchema_1 = require("../middleware/validationSchema");
var handleCookies_1 = require("../middleware/handleCookies");
var allSchemas_1 = require("../schema/allSchemas");
router.post('/addUser', validationSchema_1.validateUser(allSchemas_1.schemaUser), handleCookies_1.writeCookie, userControllers_1.addUser)
    .get('/getUsers', userControllers_1.getUsers)["delete"]('/deleteUser/:id', userControllers_1.deleteUser);
module.exports = router;
