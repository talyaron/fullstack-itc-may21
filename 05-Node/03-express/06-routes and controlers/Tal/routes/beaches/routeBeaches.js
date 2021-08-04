"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var controlBeaches_1 = require("./controlBeaches");
router.get('/all', controlBeaches_1.beachesCtl);
module.exports = router;
