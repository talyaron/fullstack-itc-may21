const fs = require("fs");
const path = require('path');
const pathToUsersJson = path.resolve(__dirname, '../db/users.json');

export function readAllUsers(){
    const allUsers = fs.readFileSync(pathToUsersJson);
    return JSON.parse(allUsers);
  };

export class User {
    name: string;
    email: string;
    password: string;
    color: string;
    id: string
    constructor(name: string, email: string, password: string, color: string, id: string){
      (this.name = name), 
      (this.email = email), 
      (this.password = password),
      (this.color = color),
      (this.id = id)
    }
}

export class UserMethods{  
    users: Array<User>;
    constructor(){
        this.users = readAllUsers()
    }
    updateJsonUsers(){
        fs.writeFileSync(pathToUsersJson, JSON.stringify(this.users));
      }
      addUser(user){
        this.users.push(user);
        this.updateJsonUsers();
    };
}
