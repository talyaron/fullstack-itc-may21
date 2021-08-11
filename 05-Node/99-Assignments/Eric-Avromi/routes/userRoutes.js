"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
//const {addUsers} = require('./models/userModels.js')
var usersControllers_1 = require("../controllers/usersControllers");
router.get('/users', usersControllers_1.addUsers);
module.exports = router;
