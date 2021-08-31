"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var studentControllers_1 = require("../controllers/studentControllers");
// import {isFirstNameExist} from '../middleware/validationModel'
router.post('/addStudent', studentControllers_1.addStudent);
router.get('/getStudents', studentControllers_1.getStudents);
module.exports = router;
