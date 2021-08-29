"use strict";

var express = require('express');

var router = express.Router();

var publicUsersController = require('../controllers/publicUsersController');

var _require = require('../middleware/middleware'),
    checkPassword = _require.checkPassword,
    checkEmailValid = _require.checkEmailValid,
    validateBody = _require.validateBody,
    encryptPwd = _require.encryptPwd,
    checkAdminAccountCreated = _require.checkAdminAccountCreated;

var Schemas = require('../schemas/allSchemas');

router.get('/getAllUsers', publicUsersController.getAllUsers);
router.post('/addUser', validateBody(Schemas.registerSchemaAJV), checkEmailValid, checkPassword, encryptPwd, checkAdminAccountCreated, publicUsersController.addUser);
router.get('/getAllProducts', publicUsersController.getAllProducts);
router.get('/productID', publicUsersController.productID);
module.exports = router;