"use strict";
exports.__esModule = true;
exports.scoreAdd = exports.getSurveys = exports.getCookie = exports.endUserLogin = exports.loginUser = exports.usersRegister = void 0;
// const express = require("express");
// const app = express();
var fs = require("fs");
var uuid = require('uuidv4').uuid;
//const cookieParser = require('cookie-parser');
var users_1 = require("../models/users");
var readAllUsers = function () {
    var allUsers = fs.readFileSync("./user.json");
    return JSON.parse(allUsers);
};
function usersRegister(req, res) {
    try {
        var allUsers = readAllUsers();
        var isFound = allUsers.some(function (elem) { return (elem.email === req.body.email) || elem.username === req.body.username; });
        if (!isFound) { //YS: Good
            var user = new users_1.User(req.body.username, req.body.email, req.body.password, []);
            allUsers.push(user);
            fs.writeFileSync("./user.json", JSON.stringify(allUsers));
            res.send({ ok: "User Created", allUsers: allUsers });
        }
        else {
            throw new Error("this is user is on the list");
        }
    }
    catch (e) {
        res.status(500).send({ error: "" + e });
    }
}
exports.usersRegister = usersRegister;
function loginUser(req, res) {
    try {
        var _a = (req.body), email_1 = _a.email, password_1 = _a.password;
        var allUsers = readAllUsers();
        var isUserPassOK = allUsers.some(function (elem) { return (elem.email === email_1) && (elem.password === password_1); });
        if (isUserPassOK) { //YS: Good
            var userLogin = allUsers.find(function (elem) { return (elem.email === email_1) && (elem.password === password_1); }); //YS: Why not use this instead of .some in line 46 + this should be in a function
            res.cookie('cookieName', JSON.stringify(userLogin), { maxAge: 30000000, httpOnly: true }); //YS: You should not send private info in cookies, its a security breach
            res.send({ ok: 'Welcom admin' });
        }
        else {
            throw new Error("Is incorrect your email or password. Try Again");
        }
    }
    catch (e) {
        res.status(500).send({ error: "" + e.message });
    }
}
exports.loginUser = loginUser;
;
function endUserLogin(req, res) {
    try {
        var _a = (req.body), email_2 = _a.email, password_2 = _a.password; //YS: Why is this in parenthesis?
        var allUsers = readAllUsers();
        var isUserPassOK = allUsers.some(function (elem) { return (elem.email === email_2) && (elem.password === password_2); }); //YS: You should use find instead of some
        console.log(allUsers);
        if (isUserPassOK && allUsers.surveys) {
            res.send({ ok: 'Welcome back admin' });
        }
        else {
            var user = new users_1.User(null, req.body.email, req.body.password, null);
            console.log(user);
            allUsers.push(user);
            fs.writeFileSync("./user.json", JSON.stringify(allUsers)); //YS: This should be in a function and go in your models
            res.send({ ok: "User Created", allUsers: allUsers });
        }
    }
    catch (error) {
        res.status(500).send({ error: "error" });
    }
}
exports.endUserLogin = endUserLogin;
function getCookie(req, res) {
    try {
        var cookieName = req.cookies.cookieName;
        if (!cookieName)
            throw new Error("Nothing is on the cookie");
        var cookie = JSON.parse(cookieName);
        res.send(cookie);
    }
    catch (e) {
        res.status(500).send({ error: "" + e.message });
    }
}
exports.getCookie = getCookie;
;
function getSurveys(req, res) {
    try {
        var email_3 = req.params.email;
        var allUsers = readAllUsers();
        if (allUsers.length !== 0) {
            var find = allUsers.find(function (user) { return user.email === email_3; }); //YS: This should be in a function and go in your models
            res.send(find.surveys);
        }
    }
    catch (e) {
        res.status(500).send({ error: "" + e });
    }
}
exports.getSurveys = getSurveys;
function scoreAdd(req, res) {
    try {
        var id_1 = req.params.id;
        var allUsers = readAllUsers();
        var allSurveys = JSON.parse(fs.readFileSync("./survey.json"));
        var admin_1 = allSurveys.find(function (survey) { return survey.id === id_1; }).admin; //YS: This should be in a function and go in your models
        var findAdmin = allUsers.find(function (user) { return user.email === admin_1; }); //YS: This should be in a function and go in your models
        var findSurveyQuestions = findAdmin.surveys.find(function (survey) { return survey.id === id_1; }).questions; //YS: This should be in a function and go in your models
        var findSurveyinSurveyJSON = allSurveys.find(function (survey) { return survey.id === id_1; }).question; //YS: This should be in a function and go in your models
        for (var i = 0; i < findSurveyQuestions.length; i++) {
            findSurveyQuestions[i].voters.push(req.body[i]);
            findSurveyinSurveyJSON[i].voters.push(req.body[i]);
        }
        fs.writeFileSync("./user.json", JSON.stringify(allUsers)); //YS: This should be in a function and go in your models 
        fs.writeFileSync("./survey.json", JSON.stringify(allSurveys)); //YS: This should be in a function and go in your models
        res.send({ ok: "Answer Sended" });
    }
    catch (e) {
        console.log(e);
        res.status(500).send({ error: "" + e });
    }
}
exports.scoreAdd = scoreAdd;
