"use strict";

var express = require("express");

var router = express.Router();

var surveysController = require("../controllers/surveysController");

router.route("/").post(surveysController.addSurvey);
module.exports = router;