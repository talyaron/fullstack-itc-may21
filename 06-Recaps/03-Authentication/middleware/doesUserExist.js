const { readAllUsers } = require('../models/usersModel');


exports.doesUserExist = (req, res, next) => {
  const { email } = req.body;
  const allUsers = readAllUsers();
  const user = allUsers.find((user) => user.email === email);
  if (user) {
    res.status(400).send('User Already Exist');
    return;
  }
  next();
};
