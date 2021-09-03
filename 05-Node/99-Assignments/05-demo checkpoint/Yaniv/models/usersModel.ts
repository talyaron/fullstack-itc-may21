export {};

const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const usersJsonPath = path.resolve(__dirname, "../users.json");


const readUsersJson = () => {
  try {
    const users: any = fs.readFileSync(usersJsonPath);
    return JSON.parse(users);
  } catch (error) {
    console.error(error.message);
  }
}

export class User {
    userUuid: string;
    email: string;
    username: string;
    password: string;
    imageUrl: string;
    favColor: string;
    
    constructor(email: string, username: string, password: string, imageUrl: string, favColor: string) {
        this.userUuid = uuidv4();
        this.email = email;
        this.username = username;
        this.password = password;
        this.imageUrl = imageUrl;
        this.favColor = favColor;
    }
}

export class Users {
    users: Array<User>;

    constructor() {
        this.users = readUsersJson();
    }

    updateUsersJson() {
        try {
            fs.writeFileSync(usersJsonPath, JSON.stringify(this.users));
        } catch (error) {
            console.error(error.message);
        }
    }

    findUserIndex(userUuid: string, userEmail: string): number {
        try {
            const userIndex: number = (userUuid) ? this.users.findIndex(user => user.userUuid === userUuid)
                                                : this.users.findIndex(user => user.email === userEmail);
            if ((userIndex === -1) && (userUuid)) throw new Error(`no user with uuid ${userUuid}`);
            
            return userIndex;

        } catch (error) {
            console.error(error.message);
        }
    }

    addUser(userEmail: string, userUsername: string, userPassword: string, imageUrl: string, favColor: string): object {
        try {

            const user = new User(userEmail, userUsername, userPassword, imageUrl, favColor);

            const userUuid: string = user.userUuid;
            
            this.users.push(user);

            this.updateUsersJson();

            return { userUuid }; 

        } catch (error) {
            console.error(error.message);
        }
    }
}