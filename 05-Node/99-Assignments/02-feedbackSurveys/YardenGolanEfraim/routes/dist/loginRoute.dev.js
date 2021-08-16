"use strict";

var express = require("express");

var router = express.Router();

var loginController = require("../controllers/loginController");

router.route("/").post(loginController.login);
module.exports = router;