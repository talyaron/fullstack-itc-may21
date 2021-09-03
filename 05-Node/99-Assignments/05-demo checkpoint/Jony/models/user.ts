export { };

const fs = require("fs");
const path = require("path");
const allUsersJSON = path.resolve(__dirname, "./data/users.json");
const { v4: uuidv4 } = require("uuid");
const Regex = require("regex");

export const readAllUsers = () => {
    try {
        const allUsers = fs.readFileSync(allUsersJSON);
        return JSON.parse(allUsers);
    } catch (error) {
        console.error(error);
    }
};


export class User {
    id: string;
    name: string;
    image: string;
    color: string;

    constructor(name: string, image: string, color: string) {
        this.id = uuidv4()
        this.name = name
        this.image = image
        this.color = color
    }
}


export class Users {
    users: Array<User>;

    constructor() {
        this.users = readAllUsers()
    }

    addUser(user: User) {
        this.users.push(user)
        this.writeAllUsers()
    }

    deleteUser(id:string){
        this.users = this.users.filter(user => user.id !== id)
        this.writeAllUsers()
    }

    writeAllUsers() {
        fs.writeFileSync(allUsersJSON, JSON.stringify(this.users));

    }
}

