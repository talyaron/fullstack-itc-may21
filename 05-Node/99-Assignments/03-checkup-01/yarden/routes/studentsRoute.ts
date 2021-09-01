const express = require('express');
const router = express.Router();

const { getStudents, addStudent } = require('../controlers/studentsController')

router
    .get('/all_students', getStudents)
    .post('add_student', addStudent)

module.exports = router