export { };
const express = require('express')
const router = express.Router();

import { getStudent, addStudent, getRandomStudent } from '../controlers/controllerStudent';

router.get('/allStudents', getStudent);
router.post('/addStudent', addStudent);
router.get('/randomStudents', getRandomStudent);

module.exports = router