import { Url } from "url";

const fs = require("fs");
const path = require("path");
const { v4: uuidv4} = require("uuid")
const allUsersJSON = path.resolve(__dirname, "./data/users.json");

export const readAllUsers = () => {
    const allUsers = fs.readFileSync(allUsersJSON);
    return JSON.parse(allUsers);
}

export class User{
    id: string;
    firstname:string;
    image: Url;
    color:string;

    constructor(firstname:string, image:Url, color:string) {
        this.id = uuidv4();    
        this.firstname = firstname;
        this.image = image;
        this.color = color;


    }

}

export class Users{
    users:Array<User> 

    constructor(){
        this.users = readAllUsers()
    };

    addUser(user:User){
        this.users.push(user)
        this.writeAllUsers()
    }  

    writeAllUsers() {
        fs.writeFileSync(allUsersJSON, JSON.stringify(this.users));
    }
 

  
}


