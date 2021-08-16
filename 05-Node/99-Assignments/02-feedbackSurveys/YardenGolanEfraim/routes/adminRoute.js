const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router
  .route("/") //YS: If you only have one controller, you dont need to do this. Should be: router.get('/', adminController.get_admin)
  .get(adminController.get_admin)
  
module.exports = router;