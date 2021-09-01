"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
//I import the function of the Controlers that Im going to use here
var usersController_1 = require("../controllers/usersController");
var validateBody_1 = require("../middleware/validateBody");
var Schemas = require('../schemas/allSchemas');
router.get('/allUsers', usersController_1.getAllUsers);
router.post('/newUser', validateBody_1.validateBody(Schemas.registerSchemaFJS), usersController_1.addNewUser);
router.post('/setCookie/:userId', usersController_1.setCookie);
router["delete"]('/deleteUser/:userId', usersController_1.deleteUser);
router.put('/updateUser/:userId', validateBody_1.validateBody(Schemas.registerSchemaFJS), usersController_1.editUser);
module.exports = router;
