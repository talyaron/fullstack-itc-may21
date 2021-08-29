"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var getStudents = require('../controlers/controllerStudents').getStudents;
router.get('/all_Students', getStudents);
module.exports = router;
