"use strict";
exports.__esModule = true;
// export { };
var express = require('express');
var router = express.Router();
var userControls_1 = require("../controlers/userControls");
router.post('/login', userControls_1.loginControl);
router.post('/register', userControls_1.registerControl);
module.exports = router;
