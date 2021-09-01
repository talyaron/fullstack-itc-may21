"use strict";
exports.__esModule = true;
exports.UserMethods = exports.User = exports.readAllUsers = void 0;
var fs = require("fs");
var path = require('path');
var pathToUsersJson = path.resolve(__dirname, '../db/users.json');
function readAllUsers() {
    var allUsers = fs.readFileSync(pathToUsersJson);
    return JSON.parse(allUsers);
}
exports.readAllUsers = readAllUsers;
;
var User = /** @class */ (function () {
    function User(name, email, password, color, id) {
        (this.name = name),
            (this.email = email),
            (this.password = password),
            (this.color = color),
            (this.id = id);
    }
    return User;
}());
exports.User = User;
var UserMethods = /** @class */ (function () {
    function UserMethods() {
        this.users = readAllUsers();
    }
    UserMethods.prototype.updateJsonUsers = function () {
        console.log('updateJsonUsers');
        fs.writeFileSync(pathToUsersJson, JSON.stringify(this.users));
    };
    UserMethods.prototype.addUser = function (user) {
        console.log('user:', user);
        this.users.push(user);
        this.updateJsonUsers();
    };
    ;
    return UserMethods;
}());
exports.UserMethods = UserMethods;
