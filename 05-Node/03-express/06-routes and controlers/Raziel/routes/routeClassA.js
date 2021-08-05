"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var controlClassA_1 = require("../controlers/controlClassA");
router.get('/all', controlClassA_1.allStudentsA);
module.exports = router;
