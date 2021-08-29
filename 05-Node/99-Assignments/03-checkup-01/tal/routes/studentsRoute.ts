export { };
const express = require('express')
const router = express.Router();

const {getStudents} = require('../controlers/controlerStudents');

router.get('/all_students',getStudents);

module.exports = router