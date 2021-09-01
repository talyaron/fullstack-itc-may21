"use strict";
exports.__esModule = true;
exports.Users = exports.User = exports.readAllUsers = void 0;
var fs = require("fs");
var uuidv4 = require("uuid").v4;
exports.readAllUsers = function () {
    var allUsers = fs.readFileSync("models/data/users.json");
    return JSON.parse(allUsers);
};
var User = /** @class */ (function () {
    function User(email, password, username, isAdmin, cart) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.isAdmin = isAdmin;
        this.cart = cart;
        this.id = uuidv4();
    }
    return User;
}());
exports.User = User;
var Users = /** @class */ (function () {
    function Users() {
        this.userList = exports.readAllUsers();
    }
    Users.prototype.addUser = function (user) {
        this.userList.push(user);
        fs.writeFileSync("models/data/users.json", JSON.stringify(this.userList));
    };
    return Users;
}());
exports.Users = Users;
