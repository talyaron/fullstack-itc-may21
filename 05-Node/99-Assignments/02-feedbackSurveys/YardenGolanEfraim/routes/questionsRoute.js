const express = require("express");
const router = express.Router();
const questionsController = require("../controllers/questionsController")

router
  .route("/")
  .post(questionsController.post_questions)

module.exports = router;