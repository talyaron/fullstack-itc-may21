const express = require('express');
const router = express.Router();

import {
      addStudent, getStudents, deleteStudent, bringStudent, editStudent, searchByLastName,
      randomStudents
} from '../controllers/studentControllers'

import { isFirstNameExist } from '../middleware/validationModel'
import { validateStudent } from '../middleware/validationSchemas'
import {writeCookie} from '../middleware/handleCookies'

import { schemaStudent } from '../schema/allSchemas'

router.post('/addStudent', validateStudent(schemaStudent), isFirstNameExist, writeCookie, addStudent)
      .get('/getStudents', getStudents)
      .delete('/deleteStudent/:id', deleteStudent)
      .get('/bringStudent/:id', bringStudent)
      .put('/editStudent/:id', validateStudent(schemaStudent), isFirstNameExist, editStudent)
      .put('/searchByLastName/', searchByLastName)
      .post('/randomStudents', randomStudents)



module.exports = router