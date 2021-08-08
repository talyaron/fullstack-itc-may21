const fs = require('fs');

const readJson = () => {
    try {
        const users = fs.readFileSync('../users.json');
        return JSON.parse(users);
    
    } catch (error) {
        console.error(error);
    }
}

class Users {
    
    constructor() {
        this.usersList = readJson();
    }

    updateUsersJson() {
        try {
            fs.writeFileSync('users.json',JSON.stringify(this.usersList));

        } catch (error) {
            console.error(error);
        }
    }

    addUser(user) {
        try {
            user.email = 'user@example.com';

            this.usersList.push(user);
            
            this.updateUsersJson();

        } catch (error) {
            console.error(error);
        }
    }
}

export const users = new Users;