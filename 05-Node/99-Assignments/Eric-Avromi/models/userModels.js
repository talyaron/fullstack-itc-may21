const fs = require('fs');



function addUsers(user){
    console.log('in add user ');
    const allUsers = fs.readFileSync("./users.json")
    console.log(allUsers);
    const allUsersPars = JSON.parse(allUsers)
    const updateUsers = allUsersPars.push(user);
  fs.writeFileSync("./users.json", JSON.stringify(allUsersPars));
    return console.log('user added ');

}










exports.addUsers = addUsers;