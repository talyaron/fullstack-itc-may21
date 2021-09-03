"use strict";
exports.__esModule = true;
exports.searchBooksData = exports.createUser = void 0;
var userModel_1 = require("../models/userModel");
var secret_1 = require("../secret/secret");
var fs = require("fs");
var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
var jwt = require("jsonwebtoken");
app.use(express.json());
app.use(cookieParser());
exports.createUser = function (req, res) {
    var _a = req.body, name = _a.name, bookName = _a.bookName;
    var newUser = new userModel_1.User(name, bookName);
    var allUsers = new userModel_1.Users();
    allUsers.createUser(newUser);
    var users = userModel_1.readUsers();
    var findUser = users.find(function (elements) {
        return elements.name === req.body.name && elements.bookName === req.body.bookName;
    });
    var token = jwt.sign(findUser, secret_1.secret);
    res.cookie("cookieName", JSON.stringify(token), {
        maxAge: 101011010,
        httpOnly: true
    });
    res.send(allUsers);
};
exports.searchBooksData = function (req, res) {
    var name = req.body.name;
    console.log(name);
    var allUsers = new userModel_1.Users();
    var findBook = allUsers.searchBooks(name);
    res.send(findBook);
    console.log(findBook);
};
