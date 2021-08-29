"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var controlersBeaches_1 = require("../controlers/controlersBeaches");
router.get('/all', controlersBeaches_1.allBeaches);
router.get('/first', controlersBeaches_1.firstBeach);
module.exports = router;
