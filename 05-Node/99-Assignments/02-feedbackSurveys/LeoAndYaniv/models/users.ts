export {};
/* import { readJson } from "../controlers/controlerUsers"; */

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

/* export class Users {
    users: Array<User>
    constructor(){
    this.users = readJson();
}
} */
