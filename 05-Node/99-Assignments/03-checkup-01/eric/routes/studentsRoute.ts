export { };
const express = require('express')
const router = express.Router();

const {getStudents} = require('../controlers/controllerStudents')

router.get('/all_Students', getStudents)

module.exports = router