"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, email, password, createdSurvey) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdSurvey = createdSurvey;
    }
    return User;
}());
exports.User = User;
const fs = require('fs');


//YS: Good 
function addUsers(user){
    console.log('in add user ');
    const allUsers = getAllUsers()
    const updateUsers = allUsers.push(user);
  fs.writeFileSync("./users.json", JSON.stringify(allUsers));
    return console.log('user added ');

}

function getAllUsers() { 

  const allUsers = fs.readFileSync("./users.json");
  const parsed = JSON.parse(allUsers);
  return parsed
}


exports.addUsers = addUsers;
exports.getAllUsers = getAllUsers;
