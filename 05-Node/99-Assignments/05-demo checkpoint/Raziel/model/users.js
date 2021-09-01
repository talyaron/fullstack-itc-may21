"use strict";
exports.__esModule = true;
exports.Users = exports.User = void 0;
var uuidv4 = require("uuid").v4;
var fs = require("fs");
var path = require("path");
var usersJsonPath = path.resolve(__dirname, "./users.json");
//function to read the user json 
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
    function User(name, email, password, color, img) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.img = img;
        this.color = color;
        this.id = uuidv4();
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
    Users.prototype.addUser = function (user) {
        try {
            this.users.push(user);
            this.updateUsersJson();
        }
        catch (error) {
            console.error(error);
        }
    };
    Users.prototype.finduser = function (email) {
        try {
            var userInfo = this.users.find(function (userElement) { return userElement.email === email; });
            if (userInfo) {
                return userInfo;
            }
            else {
                return console.error("user not found");
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    return Users;
}());
exports.Users = Users;
