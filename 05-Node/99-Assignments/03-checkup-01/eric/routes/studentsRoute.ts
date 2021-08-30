export { };
const express = require('express')
const router = express.Router();

const {getStudents, addStudent} = require('../controlers/controllerStudents')

router
        .get('/all_Students', getStudents)
        .post('/add_students', addStudent)

module.exports = router