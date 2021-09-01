"use strict";
exports.__esModule = true;
exports.Users = exports.User = void 0;
var uuidv4 = require("uuid").v4;
var fs = require("fs");
var path = require("path");
var usersJsonPath = path.resolve(__dirname, "../users.json");
var readUsersJson = function () {
    try {
        var users = fs.readFileSync(usersJsonPath);
        return JSON.parse(users);
    }
    catch (error) {
        console.error(error.message);
    }
};
var User = /** @class */ (function () {
    function User(email, username, password, imageUrl, favColor) {
        this.userUuid = uuidv4();
        this.email = email;
        this.username = username;
        this.password = password;
        this.imageUrl = imageUrl;
        this.favColor = favColor;
    }
    return User;
}());
exports.User = User;
var Users = /** @class */ (function () {
    function Users() {
        this.users = readUsersJson();
    }
    Users.prototype.updateUsersJson = function () {
        try {
            fs.writeFileSync(usersJsonPath, JSON.stringify(this.users));
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Users.prototype.findUserIndex = function (userUuid, userEmail) {
        try {
            var userIndex = (userUuid) ? this.users.findIndex(function (user) { return user.userUuid === userUuid; })
                : this.users.findIndex(function (user) { return user.email === userEmail; });
            if ((userIndex === -1) && (userUuid))
                throw new Error("no user with uuid " + userUuid);
            return userIndex;
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Users.prototype.addUser = function (userEmail, userUsername, userPassword, imageUrl, favColor) {
        try {
            var user = new User(userEmail, userUsername, userPassword, imageUrl, favColor);
            var userUuid = user.userUuid;
            this.users.push(user);
            this.updateUsersJson();
            return { userUuid: userUuid };
        }
        catch (error) {
            console.error(error.message);
        }
    };
    return Users;
}());
exports.Users = Users;
