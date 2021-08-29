"use strict";
exports.__esModule = true;
var controllersStudent_1 = require("../controlers/controllersStudent");
var express = require('express');
var router = express.Router();
router.get('/all_student', controllersStudent_1.getStudent);
module.exports = router;
