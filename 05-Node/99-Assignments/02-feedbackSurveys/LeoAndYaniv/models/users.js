"use strict";
exports.__esModule = true;
exports.Users = exports.User = void 0;
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
    Users.prototype.createUser = function (user, surveyUuid) {
        try {
            var emailIndex = this.users.findIndex(function (userItem) { return userItem.email === user.email; });
            if (surveyUuid === null) {
                // registration attempt
                if (emailIndex !== -1) {
                    // email exists
                    if (this.users[emailIndex].password !== null)
                        return true;
                    // have password
                    else {
                        // don't have password
                        this.users[emailIndex].password = user.password;
                    }
                }
                else {
                    // email doesn't exist
                    this.users.push(user);
                }
            }
            else if (emailIndex !== -1) {
                // survey answers submit + email exists
                var userFilled = this.users[emailIndex].answeredSurveys.find(function (surveyUuidItem) { return surveyUuidItem === surveyUuid; });
                if (userFilled)
                    return true;
                // already answered survey
                else {
                    this.users[emailIndex].answeredSurveys.push(surveyUuid);
                }
            }
            else {
                // survey answers submit + email doesn't exist
                user.answeredSurveys.push(surveyUuid);
                this.users.push(user);
            }
            this.updateUsersJson();
            return false;
        }
        catch (error) {
            console.error(error);
        }
    };
    Users.prototype.loginUser = function (email, password) {
        try {
            var userExists = this.users.find(function (user) { return user.email === email && user.password === password; });
            if (userExists) {
                return userExists;
            }
            return undefined;
        }
        catch (error) {
            console.error(error);
        }
    };
    Users.prototype.addCreatedSurvey = function (cookieEmail, newSurveyUuid) {
        var loggedInUserIndex = this.users.findIndex(function (user) { return user.email === cookieEmail; });
        this.users[loggedInUserIndex].createdSurveys.push(newSurveyUuid);
        this.updateUsersJson();
    };
    Users.prototype.deleteSurveyForUser = function (surveyId) {
        try {
            this.users.forEach(function (user) {
                user.createdSurveys = user.createdSurveys.filter(function (createdSurvey) { return (createdSurvey !== surveyId); });
            });
            this.users.forEach(function (user) {
                user.answeredSurveys = user.answeredSurveys.filter(function (answeredSurveys) { return (answeredSurveys !== surveyId); });
            });
            this.updateUsersJson();
        }
        catch (error) {
            console.error(error);
        }
    };
    return Users;
}());
exports.Users = Users;
