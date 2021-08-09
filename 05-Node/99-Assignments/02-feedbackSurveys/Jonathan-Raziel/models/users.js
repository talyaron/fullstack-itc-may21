"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(username, email, password, surveys) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.surveys = surveys;
    }
    return User;
}());
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
module.exports = User;
