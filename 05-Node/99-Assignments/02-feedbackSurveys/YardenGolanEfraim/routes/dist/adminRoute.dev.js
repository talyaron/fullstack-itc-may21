"use strict";

var express = require("express");

var router = express.Router();

var adminController = require("../controllers/adminController");

router.route("/") //YS: If you only have one controller, you dont need to do this. Should be: router.get('/', adminController.get_admin)
.get(adminController.get_admin);
module.exports = router;