const express = require("express");
const router = express.Router();
const votesController = require("../controllers/votesController")

router
  .route('/') //YS: Good
  .get(votesController.guest_voter)
  .post(votesController.post_votes)

module.exports = router;