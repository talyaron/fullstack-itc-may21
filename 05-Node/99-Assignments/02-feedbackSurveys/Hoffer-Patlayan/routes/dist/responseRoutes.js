"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var responseControllers_1 = require("../controllers/responseControllers");
router.get('/', responseControllers_1.getSuveryShare);
router.get('/getResp', responseControllers_1.getResp);
router.post('/postResponds', responseControllers_1.sendRespon);
module.exports = router;
