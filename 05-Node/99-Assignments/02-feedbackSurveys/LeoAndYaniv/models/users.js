"use strict";
exports.__esModule = true;
exports.User = void 0;
/* import { readJson } from "../controlers/controlerUsers"; */
var User = /** @class */ (function () {
    function User(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.createdSurveys = [];
        this.answeredSurveys = [];
    }
    return User;
}());
exports.User = User;
/* export class Users {
    users: Array<User>
    constructor(){
    this.users = readJson();
}
} */
