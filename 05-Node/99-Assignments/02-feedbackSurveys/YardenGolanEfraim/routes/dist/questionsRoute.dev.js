"use strict";

var express = require("express");

var router = express.Router();

var questionsController = require("../controllers/questionsController");

router.route("/") //YS: If you only have one controller, you dont need to do this. Should be: router.post('/', questionsController.post_questions)
.post(questionsController.post_questions);
module.exports = router;