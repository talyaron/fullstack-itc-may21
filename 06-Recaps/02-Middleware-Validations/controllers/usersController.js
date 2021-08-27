const { v4: uuidv4 } = require('uuid');
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
