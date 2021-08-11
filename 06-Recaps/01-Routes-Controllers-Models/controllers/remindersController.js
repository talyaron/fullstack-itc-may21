const { v4: uuidv4 } = require("uuid");
const { addreminder, editreminder, deletereminder, readAllreminders} = require("../models/remindersModel");

exports.get_all_reminders = (req, res) => {
  try {
    const allreminders = readAllreminders();
    res.send(allreminders);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.get_reminder_by_id = (req, res) => {
  try {
    const { id } = req.params;
    const reminder = getreminderById(id);
    res.send(reminder);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.add_reminder = (req, res) => {
  try {
    const newreminder = {
      ...req.body,
      id: uuidv4(),
      dateCreated: Date.now(),
    };
    const remindersAdded = addreminder(newreminder);
    res.send(remindersAdded);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.delete_reminder = (req, res) => {
  try {
    const { reminderId } = req.params;
    const deletedreminderArray = deletereminder(reminderId);
    res.send(deletedreminderArray);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.edit_reminder = (req, res) => {
  const { reminderId } = req.params;
  const { text } = req.body;
  const updatedreminder = editreminder(text, reminderId);
  res.send({ reminder: updatedreminder });
};
