"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var _a = require('../controlers/controlerStudents'), getStudents = _a.getStudents, addStudent = _a.addStudent, getRandomStudents = _a.getRandomStudents;
router
    .get('/all_students', getStudents)
    .post('/random_students', isW, getRandomStudents)
    .post('/add_student', addStudent);
function isW(req, res, next) {
    console.log('working');
    next();
}
module.exports = router;
