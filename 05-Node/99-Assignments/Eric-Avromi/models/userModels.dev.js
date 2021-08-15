"use strict";

var fs = require('fs');

function addUsers(user) {
  var allUsers = getAllUsers();
  var updateUsers = allUsers.push(user);
  fs.writeFileSync("./users.json", JSON.stringify(allUsers));
  return console.log('user added ');
}

function getAllUsers() {
  var allUsers = fs.readFileSync("./users.json");
  var parsed = JSON.parse(allUsers);
  return parsed;
}

exports.addUsers = addUsers;
exports.getAllUsers = getAllUsers;