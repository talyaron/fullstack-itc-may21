"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var _a = require('../controlers/controllerStudents'), getStudents = _a.getStudents, addStudent = _a.addStudent;
router
    .get('/all_Students', getStudents)
    .post('/add_students', addStudent);
module.exports = router;
