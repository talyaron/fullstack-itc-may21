const express = require('express');

const router = express.Router();

import {addStudent, getStudents} from '../controllers/studentControllers'
// import {isFirstNameExist} from '../middleware/validationModel'

router.post('/addStudent', addStudent);
router.get('/getStudents', getStudents)


module.exports = router