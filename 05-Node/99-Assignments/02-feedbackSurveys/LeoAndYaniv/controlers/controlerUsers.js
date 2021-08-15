"use strict";
exports.__esModule = true;
exports.uploadSurvey = exports.sendCookie = exports.answerLogin = exports.login = exports.newUser = void 0;
var users_1 = require("../models/users");
var surveys_1 = require("../models/surveys");
//Function to add a new user into the JSON
function newUser(req, res) {
    try {
        var _a = req.body, username = _a.username, email = _a.email, password = _a.password;
        var user = new users_1.User(username, email, password);
        var allUsers = new users_1.Users();
        var emailExistsWithPass = allUsers.createUser(user, null);
        if (!emailExistsWithPass) {
            res.send({ message: "A new User was added", user: user });
        }
        else {
            res.send({
                message: "Email already registered, please try a different email address!"
            });
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
        var allUsers = new users_1.Users();
        var userExists = allUsers.loginUser(email, password);
        if (userExists) {
            var username = userExists.username;
            //Set the cookie
            var cookieToWrite = JSON.stringify({ username: username, email: email });
            res.cookie("userDetails", cookieToWrite, { maxAge: 900000, httpOnly: true });
            res.send({ message: "Logged in successfully", username: username });
        }
        else {
            res.send({
                message: "Username or password are wrong, please try again!"
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.login = login;
//Function for answer Login JSON
function answerLogin(req, res) {
    try {
        var username = req.username, email = req.email;
        var uuid = req.params.uuid;
        var user = new users_1.User(username, email, null);
        var allUsers = new users_1.Users();
        var filledAlready = allUsers.createUser(user, uuid);
        if (!filledAlready) {
            res.send({ message: "User answers received", filledAlready: filledAlready });
        }
        else {
            res.send({ message: "User already filled", filledAlready: filledAlready });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.answerLogin = answerLogin;
function sendCookie(req, res) {
    try {
        res.send({ email: req.email, username: req.username });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.sendCookie = sendCookie;
//Function to add new survey uuid to user
function uploadSurvey(req, res) {
    try {
        var uuid = req.params.uuid; // survey uuid
        var allSurveys = new surveys_1.Surveys();
        var newSurvey = new surveys_1.Survey(allSurveys.surveys[allSurveys.findSurveyIndex(uuid)]);
        newSurvey.title = req.body.surveyTitle;
        allSurveys.updateSurvey(newSurvey);
        var allUsers = new users_1.Users();
        allUsers.addCreatedSurvey(req.email, uuid);
        res.send({
            message: "Amazing! You created a survey properly",
            userDetails: req.email
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.uploadSurvey = uploadSurvey;
