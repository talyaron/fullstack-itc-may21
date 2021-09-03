"use strict";
exports.__esModule = true;
exports.Users = exports.User = exports.readUsers = void 0;
var uuidv4 = require("uuid").v4;
var fs = require("fs");
var path = require("path");
var pasthtoUserJson = path.resolve(__dirname, "../db/users.json");
exports.readUsers = function () {
    var users = fs.readFileSync(pasthtoUserJson);
    return JSON.parse(users);
};
var User = /** @class */ (function () {
    function User(name, color, image) {
        (this.id = this.id = uuidv4()),
            (this.name = name),
            (this.color = color),
            (this.image = image);
    }
    return User;
}());
exports.User = User;
var Users = /** @class */ (function () {
    function Users() {
        this.users = exports.readUsers();
    }
    Users.prototype.reWriteUserJson = function () {
        fs.writeFileSync(pasthtoUserJson, JSON.stringify(this.users));
    };
    Users.prototype.createUser = function (user) {
        this.users.push(user);
        this.reWriteUserJson();
    };
    return Users;
}());
exports.Users = Users;
