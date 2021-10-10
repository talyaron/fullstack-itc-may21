"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var userControllers_1 = require("../controllers/userControllers");
var validationModel_1 = require("../middleware/validationModel");
var validationSchemas_1 = require("../middleware/validationSchemas");
var allSchemas_1 = require("../schemas/allSchemas");
var handleCookies_1 = require("../middleware/handleCookies");
router.post('/addUser', validationSchemas_1.validateUser(allSchemas_1.schemaUser), validationModel_1.isFirstNameExist, handleCookies_1.writeCookie, userControllers_1.addUser);
router.get('/getUsers', userControllers_1.getUsers);
router.put('/searchByFirstname', userControllers_1.searchByFirstname);
module.exports = router;