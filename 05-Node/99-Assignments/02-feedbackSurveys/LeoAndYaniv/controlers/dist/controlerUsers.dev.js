"use strict";

var userModel = require('../models/users');

var fs = require("fs");

var readJson = function readJson() {
  try {
    var users = fs.readFileSync('./users.json');
    return JSON.parse(users);
  } catch (error) {
    console.error(error);
  }
};

function newUser(req, res) {
  console.log(req);
  var user = new userModel(req.body.username, req.body.email, req.body.password);
  var allUsers = readJson();
  allUsers.push(user);
  fs.writeFileSync("./users.json", JSON.stringify(allUsers));
  res.send({
    message: 'A new User was added',
    users: allUsers
  });
}

exports.newUser = newUser;