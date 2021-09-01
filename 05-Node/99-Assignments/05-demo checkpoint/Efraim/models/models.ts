class User {

    name: string
    imageURL: string;
    color: string;
    userID: string;
    constructor(name, imageURL, color) {
        
        this.name = name;
        this.imageURL = imageURL;
        this.color = color
        this.userID = "id" + Math.random().toString(16).slice(2);
    
    }
}


class Users {
    users: Array<User>
    constructor() {
        this.users = [];
    }
    addUser(user: User) {
        try {
            this.users.push(user);
        } catch (e) {
            console.error(e)
        }
    };
   
    findUser(userId: string): User {
        try {
            const user: User = this.users.find(usr => usr.userID === userId);
            if (user) {
                return user
            }
        } catch (e) {
            console.error(e)
        }
    }
}
const users: Users = new Users();


module.exports = { User, Users,  users }