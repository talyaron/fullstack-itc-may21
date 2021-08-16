"use strict";
exports.__esModule = true;
var votersControllers_1 = require("../controllers/votersControllers");
var express = require('express');
var router = express.Router();
router.post('/addVoter', votersControllers_1.addvoter);
module.exports = router;
