"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var getStudents = require('../controlers/controlerStudents').getStudents;
router.get('/all_students', getStudents);
module.exports = router;
