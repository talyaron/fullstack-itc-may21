const fs = require('fs');



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