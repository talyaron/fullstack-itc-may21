"use strict";
exports.__esModule = true;
exports.Users = exports.User = exports.readAllUsers = void 0;
var fs = require('fs');
var path = require('path');
var pathToUsersJson = path.resolve(__dirname, '../db/users.json');
var uuidv4 = require('uuid').v4;
exports.readAllUsers = function () {
    var allUsers = fs.readFileSync(pathToUsersJson);
    return JSON.parse(allUsers);
};
var User = /** @class */ (function () {
    function User(name, email, password) {
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.password = password;
    }
    return User;
}());
exports.User = User;
var Users = /** @class */ (function () {
    function Users() {
        this.users = exports.readAllUsers();
    }
    Users.prototype.addUser = function (user) {
        this.users.push(user);
        this.writeAllUsers();
    };
    Users.prototype.findUserByEmail = function (email) {
        var find = this.users.find(function (user) { return user.email === email; });
        return find;
    };
    Users.prototype.writeAllUsers = function () {
        fs.writeFileSync(pathToUsersJson, JSON.stringify(this.users));
    };
    return Users;
}());
exports.Users = Users;
