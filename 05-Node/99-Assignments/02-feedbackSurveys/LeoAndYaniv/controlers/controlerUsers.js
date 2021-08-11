"use strict";
exports.__esModule = true;
exports.uploadSurvey = exports.getInfo = exports.login = exports.newUser = void 0;
var users_1 = require("../models/users");
var fs = require("fs");
var path = require('path');
var surveysJsonPath = path.resolve(__dirname, '../models/surveys.json');
//Function to add a new user into the JSON
function newUser(req, res) {
    try {
        var _a = req.body, username = _a.username, email = _a.email, password = _a.password;
        var user = new users_1.User(username, email, password);
        var allUsers = new users_1.Users;
        var userCreated = allUsers.createUser(user);
        if (!userCreated) {
            var userCookie = user.userJsonForCookie();
            res.cookie("userDetails", userCookie, { maxAge: 300000000, httpOnly: true });
            res.send({ message: "A new User was added", user: user });
        }
        else {
            res.send({ message: "Email already registered, please try a different email address!" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.newUser = newUser;
//Function to login the user
function login(req, res) {
    try {
        var _a = req.body, email = _a.email, password = _a.password;
        var allUsers = new users_1.Users;
        var username = allUsers.loginUser(email, password);
        if (username) {
            var user = new users_1.User(username, email, password);
            var userCookie = user.userJsonForCookie();
            res.cookie("userDetails", userCookie, { maxAge: 300000000, httpOnly: true });
            res.send({ message: "Logged in successfully", username: username });
        }
        else {
            res.send({ message: "Username or password are wrong, please try again!" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.login = login;
//Function to get the information from the cookie
function getInfo(req, res) {
    try {
        //Read cookies
        var userDetails = req.cookies.userDetails;
        var cookie = JSON.parse(userDetails);
        res.send({ cookie: cookie });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.getInfo = getInfo;
//Function to read the JSON of created surveys
var readJsonSurveys = function () {
    try {
        var surveys = fs.readFileSync(surveysJsonPath);
        return JSON.parse(surveys);
    }
    catch (error) {
        console.error(error);
    }
};
//Function to add new survey uuid to user
function uploadSurvey(req, res) {
    try {
        var uuid_1 = req.params.uuid; // survey uuid
        var allSurveys = readJsonSurveys();
        var newSurvey = allSurveys.find(function (survey) { return survey.uuid === uuid_1; });
        newSurvey.title = req.body.surveyTitle;
        //Read cookies to find the user
        var userDetails = req.cookies.userDetails;
        var cookie = JSON.parse(userDetails);
        var allUsers = new users_1.Users;
        allUsers.addCreatedSurvey(cookie.email, newSurvey.uuid);
        fs.writeFileSync(surveysJsonPath, JSON.stringify(allSurveys));
        res.send({ message: "Amazing! You created a survey properly", userInfo: cookie.email });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.uploadSurvey = uploadSurvey;
