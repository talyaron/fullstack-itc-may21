"use strict";

var fs = require('fs');

function addUsers(user) {
  console.log('in add user ');
  var allUsers = fs.readFileSync("./users.json");
  console.log(allUsers);
  var allUsersPars = JSON.parse(allUsers);
  var updateUsers = allUsersPars.push(user);
  var writeUser = fs.writeFileSync(updateUsers, "./users.json");
  return console.log('user added ');
}

exports.addUsers = addUsers;