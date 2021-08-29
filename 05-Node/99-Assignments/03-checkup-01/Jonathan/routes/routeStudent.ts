export { };
const express = require('express')
const router = express.Router();

import {getStudents} from '../controlers/controllersStudent'

router.get('/all_students',getStudents)

module.exports = router