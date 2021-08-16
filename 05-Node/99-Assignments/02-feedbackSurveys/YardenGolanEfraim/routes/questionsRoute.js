const express = require("express");
const router = express.Router();
const questionsController = require("../controllers/questionsController")

router
  .route("/")  //YS: If you only have one controller, you dont need to do this. Should be: router.post('/', questionsController.post_questions)
  .post(questionsController.post_questions)

module.exports = router;