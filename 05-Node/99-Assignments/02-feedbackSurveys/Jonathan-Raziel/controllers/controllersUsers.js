"use strict";
exports.__esModule = true;
exports.getCookie = exports.loginUser = exports.usersRegister = void 0;
var express = require("express");
var app = express();
var fs = require("fs");
var cookieParser = require('cookie-parser');
var users_1 = require("../models/users");
var readAllUsers = function () {
    var allUsers = fs.readFileSync("./user.json");
    return JSON.parse(allUsers);
};
function usersRegister(req, res) {
    try {
        //const user1 = new model.User("pepe", 'a@a.com','a1a23',[]);
        var allUsers = readAllUsers();
        var isFound = allUsers.some(function (elem) { return (elem.email === req.body.email) || elem.username === req.body.username; });
        if (!isFound) {
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
        if (isUserPassOK) {
            var userLogin = allUsers.find(function (elem) { return (elem.email === email_1) && (elem.password === password_1); });
            res.cookie('cookieName', JSON.stringify(userLogin), { maxAge: 30000000, httpOnly: true });
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
function getCookie(req, res) {
    try {
        var cookieName = req.cookies.cookieName;
        if (!cookieName)
            throw new Error("Nothing is on the cookie");
        var cookie = JSON.parse(cookieName);
        console.log(cookie);
        res.send(cookie);
    }
    catch (e) {
        res.status(500).send({ error: "" + e.message });
    }
}
exports.getCookie = getCookie;
;
