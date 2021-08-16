"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var userControllers_1 = require("../controllers/userControllers");
router.get('/getUsers', userControllers_1.getUsers);
module.exports = router;
