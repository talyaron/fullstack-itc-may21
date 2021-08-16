"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var express_validator_1 = require("express-validator");
var signUpControllers_1 = require("../controllers/signUpControllers");
router.post('/registerUser', express_validator_1.body('email', 'Ingrese email')
    .exists()
    .isEmail(), express_validator_1.body('password', 'La contrasena debe tener un minimo de 4 caracteres')
    .exists()
    .isLength({ min: 4 }), signUpControllers_1.registerUser);
module.exports = router;
