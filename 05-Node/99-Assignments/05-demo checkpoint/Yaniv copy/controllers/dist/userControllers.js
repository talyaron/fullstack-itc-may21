"use strict";
exports.__esModule = true;
exports.allUsers = exports.details = exports.logout = exports.login = exports.register = exports.welcome = void 0;
var secret = require('../../secret/dist/secret').secret;
var jwt = require('jsonwebtoken');
var _a = require('../../models/dist/usersModel'), Users = _a.Users, User = _a.User;
function welcome(req, res) {
    try {
        var userIndex = req.userIndex;
        var users = new Users();
        var username = users.users[userIndex].username;
        res.send({ h1Text: "Awesome App", message: username + ", you're already logged in" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.welcome = welcome;
function register(req, res) {
    try {
        var _a = req.body, email = _a.email, username = _a.username, password = _a.password, imageUrl = _a.imageUrl, favColor = _a.favColor;
        var users = new Users();
        var userBasicInfo = users.addUser(email, username, password, imageUrl, favColor);
        var userUuid = userBasicInfo.userUuid;
        var currentUserToken = jwt.sign({ userUuid: userUuid }, secret, { expiresIn: 1800 });
        res.cookie('currentUser', currentUserToken, { maxAge: 1800000, httpOnly: true });
        res.send({ title: "Cheers, " + username + "!", text: "You are our newest user!" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.register = register;
function login(req, res) {
    try {
        var userIndex = req.userIndex;
        var users = new Users();
        var _a = users.users[userIndex], username = _a.username, userUuid = _a.userUuid;
        var currentUserToken = jwt.sign({ userUuid: userUuid }, secret, { expiresIn: 1800 });
        res.cookie('currentUser', currentUserToken, { maxAge: 1800000, httpOnly: true });
        res.send({ title: "Welcome back, " + username + "!", text: "Enjoy your visit!" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.login = login;
function logout(req, res) {
    try {
        var userIndex = req.userIndex;
        var users = new Users();
        var username = users.users[userIndex].username;
        res.clearCookie('currentUser');
        res.send({ username: username });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.logout = logout;
exports.details = function (req, res) {
    try {
        var userIndex = req.userIndex;
        var users = new Users();
        var user = users.users[userIndex];
        res.send({ user: user });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
};
exports.allUsers = function (req, res) {
    try {
        var users = new Users();
        res.send({ users: users.users });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
};
