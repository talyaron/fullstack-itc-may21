const express = require('express');

const router = express.Router();

import {addStudent, getStudents, deleteStudent, bringStudent, editStudent, searchByLastname, randomStudents} from '../controllers/studentControllers'
import {isFirstNameExist} from '../middleware/validationModel'
import {validateStudent} from '../middleware/vaildationSchemas'
import { schemaStudent } from '../schemas/allSchemas';
import {writeCookie} from '../middleware/handleCookies'


router.post('/addStudent',validateStudent(schemaStudent) ,isFirstNameExist, writeCookie, addStudent);
router.get('/getStudents', getStudents)
router.delete('/deleteStudent/:id', deleteStudent)
router.get('/bringStudent/:id', bringStudent)
router.put('/editStudent/:id', validateStudent(schemaStudent), isFirstNameExist, editStudent)
router.put('/searchByLastname', searchByLastname)
router.post('/randomStudents', randomStudents)




module.exports = router