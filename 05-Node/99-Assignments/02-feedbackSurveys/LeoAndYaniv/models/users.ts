export {};

const fs = require("fs");
const path = require('path');
const usersJsonPath = path.resolve(__dirname, './users.json');

//Function to read the JSON of created users
const readJsonUsers = () => {
  try {
    const users = fs.readFileSync(usersJsonPath);
    return JSON.parse(users);
  } catch (error) {
    console.error(error);
  }
};

export class User {
  username: string;
  email: string;
  password: string;
  createdSurveys: Array<string>;
  answeredSurveys: Array<string>;

  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.createdSurveys = [];
    this.answeredSurveys = [];
  }

}

export class Users {
  users: Array<User>;

  constructor() {
    this.users = readJsonUsers();
  }

  updateUsersJson() {
    try {
        fs.writeFileSync(usersJsonPath,JSON.stringify(this.users));

    } catch (error) {
        console.error(error);
    }
  }

  createUser(user) {
    try {
      const emailExists = this.users.find(userItem => userItem.email === user.email);
      if (emailExists) return true;
      this.users.push(user);
            
      this.updateUsersJson();

      return false;

    } catch (error) {
      console.error(error);
    }
  }

  loginUser(email, password) {
    try {
      const userExists = this.users.find(user => (user.email === email) && (user.password === password));
      if (userExists) {
        return userExists;
      }

      return undefined;

    } catch (error) {
      console.error(error);
    }
  }

  addCreatedSurvey(cookieEmail, newSurveyUuid) {
    const loggedInUser = this.users.find((user) => user.email === cookieEmail);
    loggedInUser.createdSurveys.push(newSurveyUuid);

    this.updateUsersJson();

  }
}