export {};

const fs = require("fs");
const path = require('path');
const usersJsonPath = path.resolve(__dirname, './users.json'); //YS: Nice!

//YS: Good job! Very organized.


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

  createUser(user, surveyUuid) { //YS: Im sure there could've been a less confusing solution, but well done. 
    try {
      const emailIndex = this.users.findIndex(userItem => userItem.email === user.email);

      if (surveyUuid === null) { // registration attempt
        if (emailIndex !== -1) { // email exists
          if (this.users[emailIndex].password !== null) return true; // have password
          else { // don't have password
            this.users[emailIndex].password = user.password;
          }
        } else { // email doesn't exist
          this.users.push(user);
        }
      } else if (emailIndex !== -1) { // survey answers submit + email exists
        const userFilled = this.users[emailIndex].answeredSurveys.find(surveyUuidItem => surveyUuidItem === surveyUuid)
        if (userFilled) return true; // already answered survey
        else {
          this.users[emailIndex].answeredSurveys.push(surveyUuid);
        }
      } else { // survey answers submit + email doens't exist
        user.answeredSurveys.push(surveyUuid);
        this.users.push(user);
      }
                    
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
    const loggedInUserIndex = this.users.findIndex((user) => user.email === cookieEmail);
    this.users[loggedInUserIndex].createdSurveys.push(newSurveyUuid);

    this.updateUsersJson();

  }
}