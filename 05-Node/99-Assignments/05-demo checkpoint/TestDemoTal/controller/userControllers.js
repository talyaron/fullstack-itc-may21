"use strict";
exports.__esModule = true;
exports.getAllUser = exports.registerUser = void 0;
var userModel_1 = require("../model/userModel");
var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
var jwt = require('jsonwebtoken');
var secret_1 = require("../secret/secret");
app.use(express.json());
app.use(cookieParser());
exports.registerUser = function (req, res) {
    var _a = req.body, name = _a.name, color = _a.color, image = _a.image;
    var newUser = new userModel_1.User(name, color, image);
    var allUsers = new userModel_1.Users();
    allUsers.createUser(newUser);
    var users = userModel_1.readUsers();
    var findUser = users.find(function (elements) {
        return elements.name === req.body.name && elements.color === req.body.color;
    });
    var token = jwt.sign(findUser, secret_1.secret);
    res.cookie("cookieName", JSON.stringify(token), { maxAge: 101011010, httpOnly: true });
    res.send({ message: "A new user has been register", allUsers: allUsers });
};
exports.getAllUser = function (req, res) {
    var allUsers = new userModel_1.Users();
    console.log(allUsers);
    res.send({ message: "Geting all user Information", allUsers: allUsers });
};
