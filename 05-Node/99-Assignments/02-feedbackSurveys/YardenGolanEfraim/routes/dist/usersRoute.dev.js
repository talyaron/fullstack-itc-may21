"use strict";

var express = require("express");

var router = express.Router();

var usersController = require("../controllers/usersController");

router.route("/").post(usersController.addUser);
module.exports = router;