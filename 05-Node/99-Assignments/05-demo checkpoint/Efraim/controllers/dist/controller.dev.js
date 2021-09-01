"use strict";

var _require = require('../models/models'),
    User = _require.User,
    users = _require.users;

exports.registerUser = function (req, res) {
  try {
    var body = req.body;
    var name = body.name,
        imageURL = body.imageURL,
        color = body.color;
    var newUser = new User(name, imageURL, color);
    users.addUser(newUser);
    res.send(users);
  } catch (error) {
    console.log(error);
  }
};

exports.getAllUsers = function (req, res) {
  try {
    res.send(users);
  } catch (error) {
    console.log(error);
  }
};