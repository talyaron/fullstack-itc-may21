var express = require('express');
var router = express.Router();
var _a = require('../controlers/studentsController'), getStudents = _a.getStudents, addStudent = _a.addStudent;
router
    .get('/all_students', getStudents)
    .post('add_student', addStudent);
module.exports = router;
