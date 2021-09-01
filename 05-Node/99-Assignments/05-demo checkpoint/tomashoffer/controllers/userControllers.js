"use strict";
exports.__esModule = true;
exports.getAllUsers = exports.logInUser = exports.registerUser = void 0;
var users_1 = require("../models/users");
var uuidv4 = require("uuid").v4;
var cookieParser = require("cookie-parser");
var jwt = require('jwt-simple');
var secret = require('../secret/secret').secret;
function registerUser(req, res) {
    try {
        console.log('register');
        var id = uuidv4();
        var user = new users_1.User(req.body.name, req.body.email, req.body.password, req.body.color, req.body.image, id);
        console.log(user);
        var methodUser = new users_1.UserMethods();
        methodUser.addUser(user);
        res.send({ ok: 'success register' });
    }
    catch (err) {
        res.send({ error: err });
    }
}
exports.registerUser = registerUser;
function logInUser(req, res) {
    var userITC = req.cookies.userITC;
    var decoded = jwt.decode(userITC, secret);
    var allUsers = users_1.readAllUsers();
    var getLogInUser = allUsers.find(function (user) { return user.id === decoded.id; });
    res.send(getLogInUser);
}
exports.logInUser = logInUser;
function getAllUsers(req, res) {
    var allUsers = users_1.readAllUsers();
    res.send(allUsers);
}
exports.getAllUsers = getAllUsers;
