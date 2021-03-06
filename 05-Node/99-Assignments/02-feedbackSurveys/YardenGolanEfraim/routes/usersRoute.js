const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController")

router
  .route("/")
  .post(usersController.add_user)
  .get(usersController.get_all_users)
module.exports = router;