const fs = require('fs');
const path = require('path');
const pathToUsersJson = path.resolve(__dirname, '../db/users.json');
const { v4: uuidv4 } = require('uuid');

export const readAllUsers = () => {
    const allUsers = fs.readFileSync(pathToUsersJson);
    return JSON.parse(allUsers);
  };

export class User{
    id:string;
    name:string;
    email:string;
    password:string;

    constructor(name:string, email:string, password:string) {
        this.id = uuidv4()
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

export class Users{
    users:Array<User>;

    constructor(){
        this.users = readAllUsers()
    }

    addUser(user:User){
        this.users.push(user)
        this.writeAllUsers();
    }

    findUserByEmail(email:string){
        const find = this.users.find(user => user.email === email)
        return find
        
    }

    writeAllUsers() {
        fs.writeFileSync(pathToUsersJson, JSON.stringify(this.users));
    }
}