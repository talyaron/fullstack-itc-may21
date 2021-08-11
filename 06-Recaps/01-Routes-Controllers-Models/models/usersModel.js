const fs = require('fs');
const path = require('path');
const usersJsonPath = path.resolve(__dirname, './users.json');

const readAllUsers = () => {
  try {
    const allUsers = fs.readFileSync(usersJsonPath);
    const allUsersParsed = JSON.parse(allUsers);
    return allUsersParsed;
  } catch (err) {
    return err.message;
  }
};

exports.signUp = (user) => {
  try {
    const allUsers = readAllUsers();
    allUsers.push(user);
    fs.writeFileSync(usersJsonPath, JSON.stringify(allUsers));
    return allUsers;
  } catch (err) {
    return err.message;
  }
};

exports.loginUser = (email, password) => {
  try {
    const userData = readAllUsers();
    const userExist = userData.find((user) => user.email === email && user.password === password);
    if (userExist) {
      return userExist;
    }
  } catch (err) {
    return err.message;
  }
};

exports.deleteUser = (id) => {
  try {
    const allusers = readAllUsers();
    const deletedUsers = allusers.filter((user) => user.id !== id);
    fs.writeFileSync(usersJsonPath, JSON.stringify(userToEdit));
    return deletedUsers;
  } catch (err) {
    return err.message;
  }
};

exports.getUserById = (id) => {
  try {
    const allUsers = readAllUsers();
    const userById = allUsers.find((user) => user.id === id);
    return userById;
  } catch (err) {
    return err.message;
  }
};
