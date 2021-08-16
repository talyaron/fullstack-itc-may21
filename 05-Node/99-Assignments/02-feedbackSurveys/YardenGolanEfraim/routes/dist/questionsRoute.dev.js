"use strict";

var express = require("express");

var router = express.Router();

var questionsController = require("../controllers/questionsController");

router.route("/").post(questionsController.post_questions);
module.exports = router;