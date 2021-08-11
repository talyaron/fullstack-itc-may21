const express = require("express");
const router = express.Router();
const surveysController = require("../controllers/surveysController");

router
  .route("/")
  .post(surveysController.addSurvey)

module.exports = router;