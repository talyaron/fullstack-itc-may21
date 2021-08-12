const fs = require("fs");
const path = require("path");
const remindersJsonPath = path.resolve(__dirname, "../reminders.json");

const readAllreminders = () => {
  try {
    const allreminders = fs.readFileSync(remindersJsonPath);
    const allremindersParsed = JSON.parse(allreminders);
    return allremindersParsed;
  } catch (err) {
    return err.message;
  }
};

exports.readAllreminders = readAllreminders;

const addreminder = (reminder) => {
  try {
    const allreminders = readAllreminders();
    allreminders.push(reminder);
    fs.writeFileSync(remindersJsonPath, JSON.stringify(allreminders));
    return allreminders;
  } catch (err) {
    return err.message;
  }
};

exports.addreminder = addreminder;

const editreminder = (reminderData, id) => {
  try {
    const allreminders = readallreminders();
    const reminderToEdit = allreminders.find((reminder) => reminder.id === id);
    reminderToEdit.text = reminderData.text;
    fs.writeFileSync(remindersJsonPath, JSON.stringify(reminderToEdit));
    return allUsers;
  } catch (err) {
    return err.message;
  }
};

exports.editreminder = editreminder;

const deletereminder = (id) => {
  try {
    const allreminders = readAllreminders();
    const reminderToEdit = allreminders.filter(
      (reminder) => reminder.id !== id
    );
    fs.writeFileSync(remindersJsonPath, JSON.stringify(reminderToEdit));
    return reminderToEdit;
  } catch (err) {
    return err.message;
  }
};

exports.deletereminder = deletereminder;

const getreminderById = (id) => {
  try {
    const allreminders = readAllreminders();
    const reminderById = allreminders.find((reminder) => reminder.id === id);
    return reminderById;
  } catch (err) {}
};

exports.getreminderById = getreminderById;
