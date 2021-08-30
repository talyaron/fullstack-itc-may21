export { };
const express = require('express')
const router = express.Router();

import {getStudents, addStudent} from '../controlers/controllersStudent'

router.get('/all_students',getStudents)
       .post('/add_student', addStudent)

module.exports = router