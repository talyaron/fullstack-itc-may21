"use strict";
exports.__esModule = true;
exports.logInUser = exports.registerUser = exports.getUsers = void 0;
var users_1 = require("../model/users");
var users = new users_1.Users();
function getUsers(req, res) {
    try {
        res.send({ users: users.users });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.getUsers = getUsers;
function registerUser(req, res) {
    try {
        var _a = req.body, name = _a.name, email = _a.email, password = _a.password, img = _a.img, color = _a.color;
        var user = new users_1.User(name, email, password, img, color);
        var users_2 = new users_1.Users();
        users_2.addUser(user);
        res.send({ message: "New user was added" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.registerUser = registerUser;
function logInUser(req, res) {
    try {
        var _a = req.body, email = _a.email, password = _a.password;
        res.send({ message: "Logged in successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.logInUser = logInUser;
