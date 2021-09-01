"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var studentControllers_1 = require("../controllers/studentControllers");
var validationModel_1 = require("../middleware/validationModel");
var vaildationSchemas_1 = require("../middleware/vaildationSchemas");
var allSchemas_1 = require("../schemas/allSchemas");
var handleCookies_1 = require("../middleware/handleCookies");
router.post('/addStudent', vaildationSchemas_1.validateStudent(allSchemas_1.schemaStudent), validationModel_1.isFirstNameExist, handleCookies_1.writeCookie, studentControllers_1.addStudent);
router.get('/getStudents', studentControllers_1.getStudents);
router["delete"]('/deleteStudent/:id', studentControllers_1.deleteStudent);
router.get('/bringStudent/:id', studentControllers_1.bringStudent);
router.put('/editStudent/:id', vaildationSchemas_1.validateStudent(allSchemas_1.schemaStudent), validationModel_1.isFirstNameExist, studentControllers_1.editStudent);
router.put('/searchByLastname', studentControllers_1.searchByLastname);
router.post('/randomStudents', studentControllers_1.randomStudents);
module.exports = router;
