"use strict";
exports.__esModule = true;
exports.uploadSurvey = exports.sendCookie = exports.answerLogin = exports.login = exports.newUser = void 0;
var users_1 = require("../models/users");
var surveys_1 = require("../models/surveys");
var fs = require("fs");
var path = require("path");
var surveysJsonPath = path.resolve(__dirname, "../models/surveys.json");
//Function to add a new user into the JSON
function newUser(req, res) {
    try {
        var _a = req.body, username = _a.username, email = _a.email, password = _a.password;
        var user = new users_1.User(username, email, password);
        var allUsers = new users_1.Users();
        var emailExistsWithPass = allUsers.createUser(user);
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
        var userExist = allUsers.loginUser(email, password);
        var username = userExist.username;
        //Set the cookie
        var cookieToWrite = JSON.stringify({ username: username, email: email });
        res.cookie("userDetails", cookieToWrite, { maxAge: 300000000, httpOnly: true });
        if (userExist) {
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
        var _a = req.body, username = _a.username, email = _a.email, uuid = _a.uuid;
        var user = new users_1.User(username, email, null);
        var allUsers = new users_1.Users();
        var emailExists = allUsers.createUser(user);
        if (!emailExists) {
            res.send({ message: "A new User was added", email: email, username: username });
        }
        else {
            res.send({ message: "A new User was added", email: email, username: username });
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
//Function to read the JSON of created surveys
// const readJsonSurveys = () => {
//   try {
//     const surveys = fs.readFileSync(surveysJsonPath);
//     return JSON.parse(surveys);
//   } catch (error) {
//     console.error(error);
//   }
// };
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
