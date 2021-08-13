"use strict";
exports.__esModule = true;
exports.Users = exports.User = void 0;
var fs = require("fs");
var path = require('path');
var usersJsonPath = path.resolve(__dirname, './users.json');
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
    function User(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.createdSurveys = [];
        this.answeredSurveys = [];
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
    Users.prototype.createUser = function (user) {
        try {
            var emailExists = this.users.find(function (userItem) { return userItem.email === user.email; });
            if (emailExists)
                return true;
            this.users.push(user);
            this.updateUsersJson();
            return false;
        }
        catch (error) {
            console.error(error);
        }
    };
    Users.prototype.loginUser = function (email, password) {
        try {
            var userExists = this.users.find(function (user) { return (user.email === email) && (user.password === password); });
            if (userExists) {
                var username = userExists.username;
                return username;
            }
            return undefined;
        }
        catch (error) {
            console.error(error);
        }
    };
    Users.prototype.addCreatedSurvey = function (cookieEmail, newSurveyUuid) {
        var LoggedInUser = this.users.find(function (user) { return user.email === cookieEmail; });
        LoggedInUser.createdSurveys.push(newSurveyUuid);
        this.updateUsersJson();
    };
    return Users;
}());
exports.Users = Users;
