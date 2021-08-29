"use strict";

var express = require('express');

var router = express.Router();

var loginController = require('../controllers/loginController');

var _require = require('../middleware/middleware'),
    createTokenAndRoleCheck = _require.createTokenAndRoleCheck,
    validateBody = _require.validateBody,
    decryptPwd = _require.decryptPwd;

var Schemas = require('../schemas/allSchemas');

router.post('/login', validateBody(Schemas.loginSchemaAJV), decryptPwd, createTokenAndRoleCheck, loginController.login);
module.exports = router;