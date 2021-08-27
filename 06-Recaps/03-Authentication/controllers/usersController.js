const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const { addUser, readAllUsers } = require('../models/usersModel');

exports.register = (req, res) => {
  const { userName, email, password } = req.body;
  const newUser = {
    userName,
    email,
    password,
    id: uuidv4(),
  };

  const allUsers = addUser(newUser);

  res.send(allUsers);
};

exports.login = (req, res) => {
  try {
    const { email, password } = req.body;
    const allUsers = readAllUsers();
    const user = allUsers.find((user) => user.email === email);

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        throw new Error('Incorrect password');
      }
      if (result) {
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
        res.send({ ...user, token });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
