class User {  
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdSurvey = []
    }
}

class Users {
    constructor() {
        this.users = [];
    }
    newUser(user){
        this.users.push(user)
    }   
}
const users = new Users()

module.exports = { User, Users, users }