export { };

export class User {
    username: string;
    email: string;
    password: string;
    surveys: Array<string>;

    constructor(username, email, password, surveys) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.surveys = surveys;
    }

}

// class UserList {
//     UsersArray: Array<User> = [];

//     add(users: User) {
//         try {
//             this.UsersArray.push(users);
//         } catch (error) {
//             console.log(error);
//         }
//     }

// }

//here you supposed to have our app.post for passing to the model


// module.exports = {
//     User: User,
//     UserList: UserList,
// };

//module.exports = User;
