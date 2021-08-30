"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var controllerStudent_1 = require("../controlers/controllerStudent");
router.get('/allStudents', controllerStudent_1.getStudent);
router.post('/addStudent', controllerStudent_1.addStudent);
router.get('/randomStudents', controllerStudent_1.getRandomStudent);
module.exports = router;
