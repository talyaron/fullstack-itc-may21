"use strict";
exports.__esModule = true;
exports.Users = exports.User = exports.readAllUsers = void 0;
var fs = require("fs");
var path = require("path");
var uuidv4 = require("uuid").v4;
var allUsersJSON = path.resolve(__dirname, "./data/users.json");
exports.readAllUsers = function () {
    var allUsers = fs.readFileSync(allUsersJSON);
    return JSON.parse(allUsers);
};
var User = /** @class */ (function () {
    function User(firstname, image, color) {
        this.id = uuidv4();
        this.firstname = firstname;
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
    ;
    Users.prototype.addUser = function (user) {
        this.users.push(user);
        this.writeAllUsers();
    };
    Users.prototype.writeAllUsers = function () {
        fs.writeFileSync(allUsersJSON, JSON.stringify(this.users));
    };
    Users.prototype.searchStudentsByFirstname = function (firstname) {
        var regrExp = "^" + firstname;
        var searchTermReg = new RegExp(regrExp, "i");
        var studentsFoundByFirstname = this.users.filter(function (user) { return searchTermReg.test(user.firstname); });
        return studentsFoundByFirstname;
    };
    return Users;
}());
exports.Users = Users;
