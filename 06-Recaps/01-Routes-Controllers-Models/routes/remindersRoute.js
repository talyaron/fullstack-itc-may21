const express = require("express");
const router = express.Router();
const remindersController = require("../controllers/remindersController");

router
  .route("/")
  .get(remindersController.get_all_reminders)
  .post(remindersController.add_reminder);

router
  .route("/:reminderId")
  .get(remindersController.get_reminder_by_id)
  .delete(remindersController.delete_reminder)
  .put(remindersController.edit_reminder);

module.exports = router;
