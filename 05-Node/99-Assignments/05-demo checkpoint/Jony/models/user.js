"use strict";
exports.__esModule = true;
exports.Users = exports.User = exports.readAllUsers = void 0;
var fs = require("fs");
var path = require("path");
var allUsersJSON = path.resolve(__dirname, "./data/users.json");
var uuidv4 = require("uuid").v4;
exports.readAllUsers = function () {
    try {
        var allUsers = fs.readFileSync(allUsersJSON);
        return JSON.parse(allUsers);
    }
    catch (error) {
        console.error(error);
    }
};
var User = /** @class */ (function () {
    function User(name, image, color) {
        this.id = uuidv4();
        this.name = name;
        this.image = image;
        this.color = color;
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
    Users.prototype.deleteUser = function (id) {
        this.users = this.users.filter(function (user) { return user.id !== id; });
        this.writeAllUsers();
    };
    Users.prototype.writeAllUsers = function () {
        fs.writeFileSync(allUsersJSON, JSON.stringify(this.users));
    };
    return Users;
}());
exports.Users = Users;
