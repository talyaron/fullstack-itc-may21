"use strict";

var express = require('express');

var router = express.Router();

var userController = require('../controllers/userController');

var schemas = require('../schemas/schemas');

var _require = require('../middleware/middleware'),
    validateBody = _require.validateBody,
    createToken = _require.createToken;

router.post('/register', validateBody(schemas.registerSchemaAJV), createToken, userController.registerUser);
router.get('/getAllUsers', userController.getAllUsers);
module.exports = router;