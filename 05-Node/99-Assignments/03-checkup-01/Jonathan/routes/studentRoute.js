"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var studentControllers_1 = require("../controllers/studentControllers");
var validationModel_1 = require("../middleware/validationModel");
var validationSchemas_1 = require("../middleware/validationSchemas");
var handleCookies_1 = require("../middleware/handleCookies");
var allSchemas_1 = require("../schema/allSchemas");
router.post('/addStudent', validationSchemas_1.validateStudent(allSchemas_1.schemaStudent), validationModel_1.isFirstNameExist, handleCookies_1.writeCookie, studentControllers_1.addStudent)
    .get('/getStudents', studentControllers_1.getStudents)["delete"]('/deleteStudent/:id', studentControllers_1.deleteStudent)
    .get('/bringStudent/:id', studentControllers_1.bringStudent)
    .put('/editStudent/:id', validationSchemas_1.validateStudent(allSchemas_1.schemaStudent), validationModel_1.isFirstNameExist, studentControllers_1.editStudent)
    .put('/searchByLastName/', studentControllers_1.searchByLastName)
    .post('/randomStudents', studentControllers_1.randomStudents);
module.exports = router;
