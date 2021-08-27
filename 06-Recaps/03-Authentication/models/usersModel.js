const fs = require('fs');
const path = require('path');
const pathToUsersJson = path.resolve(__dirname, '../db/users.json');

const readAllUsers = () => {
  const allUsers = fs.readFileSync(pathToUsersJson);
  return JSON.parse(allUsers);
};

const addUser = (user) => {
  const allUsers = readAllUsers();
  allUsers.push(user);
  fs.writeFileSync(pathToUsersJson, JSON.stringify(allUsers));
  return allUsers;
};


module.exports = {readAllUsers, addUser}