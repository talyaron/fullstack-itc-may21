"use strict";

var express = require("express");

var router = express.Router();

var loginController = require("../controllers/loginController");

router.route("/") //YS: If you only have one controller, you dont need to do this. Should be: router.post('/', loginController.login)
.post(loginController.login);
module.exports = router;