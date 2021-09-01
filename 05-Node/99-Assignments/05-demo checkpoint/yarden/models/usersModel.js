"use strict";
exports.__esModule = true;
exports.UsersList = exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, imgUrl, color) {
        this.id = Math.random().toString(16);
        this.name = name;
        this.imgUrl = imgUrl;
        this.color = color;
    }
    return User;
}());
exports.User = User;
var UsersList = /** @class */ (function () {
    function UsersList() {
        this.usersArray = [];
    }
    UsersList.prototype.addUser = function (newUser) {
        this.usersArray.push(newUser);
    };
    return UsersList;
}());
exports.UsersList = UsersList;
