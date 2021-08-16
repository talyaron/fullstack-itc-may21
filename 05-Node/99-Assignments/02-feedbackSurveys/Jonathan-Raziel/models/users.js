"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(username, email, password, surveys, answersSurveys) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.surveys = surveys;
        this.answersSurveys = answersSurveys;
    }
    return User;
}());
exports.User = User;
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
