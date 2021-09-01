export { };
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const usersJsonPath = path.resolve(__dirname, "./users.json");

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
    uuid: string;
    username: string;
    picture: string;
    color: string;

    constructor(username, picture, color) {
        this.uuid = uuidv4();
        this.username = username;
        this.picture = picture;
        this.color = color;
    }
}

export class Users {
    users: Array<User>

    constructor() {
        this.users = readJsonUsers();
    }

    updateUsersJson() {
        try {
            fs.writeFileSync(usersJsonPath, JSON.stringify(this.users));
        } catch (error) {
            console.error(error);
        }
    }

    newUser(user) {
        try {
            this.users.push(user);
            this.updateUsersJson();
        } catch (error) {
            console.error(error);
        }
    }

    removeUser(id) {
        try {
            this.users = this.users.filter(user => user.uuid !== id);
            this.updateUsersJson();
        } catch (error) {
            console.error(error);
        }
    }

    findUserById(id) {
        try {
            const userFound = this.users.find(user => user.uuid === id);
            return userFound;
        } catch (error) {
            console.error(error);
        }
    }
}