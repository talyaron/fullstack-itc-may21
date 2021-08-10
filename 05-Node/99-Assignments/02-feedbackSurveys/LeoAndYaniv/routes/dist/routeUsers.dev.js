"use strict";

var express = require('express');

var router = express.Router();

var controllers = require('../controlers/controlerUsers');

router.post('/user', controllers.newUser);
module.exports = router;