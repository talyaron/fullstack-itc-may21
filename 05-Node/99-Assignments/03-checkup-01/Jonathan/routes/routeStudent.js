"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var controllersStudent_1 = require("../controlers/controllersStudent");
router.get('/all_students', controllersStudent_1.getStudents);
module.exports = router;
