"use strict";

var express = require("express");

var router = express.Router();

var usersController = require("../controllers/usersController");

router.route("/").post(usersController.add_user).get(usersController.get_all_users);
module.exports = router;