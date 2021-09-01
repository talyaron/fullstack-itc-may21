"use strict";
exports.__esModule = true;
exports.editUser = exports.deleteUser = exports.setCookie = exports.getAllUsers = exports.addNewUser = void 0;
var jwt = require('jwt-simple');
require('dotenv').config();
//I import the classes (with Methods) of the Models that Im going to use here
var usersModel_1 = require("../models/usersModel");
function addNewUser(req, res) {
    try {
        var _a = req.body, username = _a.username, picture = _a.picture, color = _a.color;
        var user = new usersModel_1.User(username, picture, color);
        var allUsers = new usersModel_1.Users();
        allUsers.newUser(user);
        res.send({ message: "A new User was added", allUsers: allUsers });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.addNewUser = addNewUser;
function getAllUsers(req, res) {
    try {
        var allUsers = new usersModel_1.Users();
        res.send({ message: "Users founded", allUsers: allUsers });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.getAllUsers = getAllUsers;
function setCookie(req, res) {
    try {
        //The cookie is only going to contain the ID of the user
        var userId = req.params.userId;
        var cookieToWrite = JSON.stringify({ id: userId });
        var token = jwt.encode(cookieToWrite, process.env.SECRET_KEY);
        //The cookie is going to expire in 30 minutes
        res.cookie("userInfo", token, { maxAge: 1800000, httpOnly: true });
        res.send({ message: "Cookie setted" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.setCookie = setCookie;
function deleteUser(req, res) {
    try {
        var userId = req.params.userId;
        var allUsers = new usersModel_1.Users();
        allUsers.removeUser(userId);
        res.send({ message: "Poof! Your user has been deleted!", allUsers: allUsers });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.deleteUser = deleteUser;
function editUser(req, res) {
    try {
        var userId = req.params.userId;
        var _a = req.body, username = _a.username, picture = _a.picture, color = _a.color;
        var allUsers = new usersModel_1.Users();
        var userFound = allUsers.findUserById(userId);
        userFound.username = username;
        userFound.picture = picture;
        userFound.color = color;
        allUsers.updateUsersJson();
        //res.send({ message: "The user was updated!", allUsers });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.editUser = editUser;
