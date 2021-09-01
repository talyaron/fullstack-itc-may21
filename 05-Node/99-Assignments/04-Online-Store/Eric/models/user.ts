export {}

const fs = require("fs");
const { v4: uuidv4 } = require("uuid");


export const readAllUsers = () => {
    const allUsers = fs.readFileSync("models/data/users.json");
    return JSON.parse(allUsers);
}

export class User {
    id: string;
    email: string;
    password: string;
    username: string;
    isAdmin: boolean;
    cart: Array<any>;

constructor(email: string, password: string, username: string, isAdmin:boolean, cart:Array<any>) {
    this.email = email;
    this.password = password;
    this.username = username;
    this.isAdmin = isAdmin;
    this.cart = cart
    this.id= uuidv4();

}}

export class Users {
    userList: Array<User>;

    constructor(){
        this.userList = readAllUsers();
    }

    addUser(user:User) {
        this.userList.push(user);
        fs.writeFileSync("models/data/users.json", JSON.stringify(this.userList));

    }
}
