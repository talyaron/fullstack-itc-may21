const express = require('express');

const router = express.Router();

import {addStudent, getStudents, deleteStudent, bringStudent, editStudent} from '../controllers/studentControllers'
import {isFirstNameExist} from '../middleware/validationModel'
import {validateStudent} from '../middleware/vaildationSchemas'
import { schemaStudent } from '../schemas/allSchemas';


router.post('/addStudent',validateStudent(schemaStudent) ,isFirstNameExist, addStudent);
router.get('/getStudents', getStudents)
router.delete('/deleteStudent/:id', deleteStudent)
router.get('/bringStudent/:id', bringStudent)
router.put('/editStudent/:id', validateStudent(schemaStudent), isFirstNameExist, editStudent)



module.exports = router