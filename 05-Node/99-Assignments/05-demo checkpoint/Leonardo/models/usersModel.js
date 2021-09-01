"use strict";
exports.__esModule = true;
exports.Users = exports.User = void 0;
var uuidv4 = require("uuid").v4;
var fs = require("fs");
var path = require("path");
var usersJsonPath = path.resolve(__dirname, "./users.json");
//Function to read the JSON of created users
var readJsonUsers = function () {
    try {
        var users = fs.readFileSync(usersJsonPath);
        return JSON.parse(users);
    }
    catch (error) {
        console.error(error);
    }
};
var User = /** @class */ (function () {
    function User(username, picture, color) {
        this.uuid = uuidv4();
        this.username = username;
        this.picture = picture;
        this.color = color;
    }
    return User;
}());
exports.User = User;
var Users = /** @class */ (function () {
    function Users() {
        this.users = readJsonUsers();
    }
    Users.prototype.updateUsersJson = function () {
        try {
            fs.writeFileSync(usersJsonPath, JSON.stringify(this.users));
        }
        catch (error) {
            console.error(error);
        }
    };
    Users.prototype.newUser = function (user) {
        try {
            this.users.push(user);
            this.updateUsersJson();
        }
        catch (error) {
            console.error(error);
        }
    };
    Users.prototype.removeUser = function (id) {
        try {
            this.users = this.users.filter(function (user) { return user.uuid !== id; });
            this.updateUsersJson();
        }
        catch (error) {
            console.error(error);
        }
    };
    Users.prototype.findUserById = function (id) {
        try {
            var userFound = this.users.find(function (user) { return user.uuid === id; });
            return userFound;
        }
        catch (error) {
            console.error(error);
        }
    };
    return Users;
}());
exports.Users = Users;
