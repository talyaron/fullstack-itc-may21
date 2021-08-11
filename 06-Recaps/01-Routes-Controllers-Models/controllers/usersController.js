const { readAllUsers, signUp, loginUser, deleteUser, getUserById } = require('../models/usersModel');
const { v4: uuidv4 } = require('uuid');

exports.get_all_users = (req, res) => {
  try {
    const allUsers = readAllUsers();
    res.send(allUsers);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.sign_up = (req, res) => {
  try {
    const newUser = {
      ...req.body,
      id: uuidv4(),
    };

    const userSignedup = signUp(newUser);
    res.send(userSignedup);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.log_in = (req, res) => {
  try {
    const { email, password } = req.body;
    const loggedInUser = loginUser(email, password);
    res.send(loggedInUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.get_user_id = (req, res) => {
  try {
    const { userId } = req.body;
    const userRequested = getUserById(userId);
    res.send(userRequested);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.delete_user = (req, res) => {
  try {
    const { userId } = req.params;
    const deletedUserArray = deleteUser(userId);
    res.send(deletedUserArray);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
