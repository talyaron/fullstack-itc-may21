const express = require('express');
const router = express.Router();

import { addStudent, getStudents, deleteStudent, bringStudent, editStudent } from '../controllers/studentControllers'

import { isFirstNameExist } from '../middleware/validationModel'
import { validateStudent } from '../middleware/validationSchemas'


import {schemaStudent} from '../schema/allSchemas'

router.post('/addStudent', validateStudent(schemaStudent), isFirstNameExist, addStudent)
      .get('/getStudents', getStudents)
      .delete('/deleteStudent/:id', deleteStudent)
      .get('/bringStudent/:id', bringStudent)
      .put('/editStudent/:id', validateStudent(schemaStudent), isFirstNameExist, editStudent)



module.exports = router