"use strict";

var fs = require('fs');

function addUsers(user) {
  var allUsers = fs.readFileSync("./users.json");
  var allUsersPars = JSON.parse(allUsers);
  var updateUsers = allUsersPars.push(user);
  fs.writeFileSync(updateUsers, "./users.json");
}

exports.addUsers = addUsers;