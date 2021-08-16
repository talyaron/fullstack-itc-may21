"use strict";
exports.__esModule = true;
var express_validator_1 = require("express-validator");
var express = require("express");
var router = express.Router();
var logInControllers_1 = require("../controllers/logInControllers");
router.post("/postLogIn", express_validator_1.body("email", "Ingrese email")
    .exists()
    .isEmail(), express_validator_1.body("password", "La contrasena debe tener un minimo de 4 caracteres")
    .exists()
    .isLength({ min: 4 }), logInControllers_1.logInUser);
module.exports = router;
