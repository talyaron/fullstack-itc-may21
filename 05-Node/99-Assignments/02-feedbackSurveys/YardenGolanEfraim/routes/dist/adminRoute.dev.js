"use strict";

var express = require("express");

var router = express.Router();

var adminController = require("../controllers/adminController");

router.route("/").get(adminController.get_admin);
module.exports = router;