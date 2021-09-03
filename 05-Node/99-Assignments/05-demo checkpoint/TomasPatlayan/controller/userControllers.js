"use strict";
exports.__esModule = true;
exports.searchByFirstname = exports.editUser = exports.bringInfo = exports.deleteUsers = exports.getAllUser = exports.registerUser = void 0;
var userModel_1 = require("../model/userModel");
var fs = require('fs');
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
exports.deleteUsers = function (req, res) {
    var id = req.params.id;
    var allUser = new userModel_1.Users();
    allUser.deleteUser(id);
    res.send(allUser);
};
exports.bringInfo = function (req, res) {
    var id = req.params.id;
    var allProduct = userModel_1.readUsers();
    var findProduct = allProduct.find(function (element) { return element.id === id; });
    res.send(findProduct);
};
exports.editUser = function (req, res) {
    var id = req.params.id;
    var _a = req.body, name = _a.name, color = _a.color, image = _a.image;
    var users = userModel_1.readUsers();
    var findUser = users.find(function (element) { return element.id === id; });
    findUser.name = name;
    findUser.color = color;
    findUser.image = image;
    fs.writeFileSync("./db/users.json", JSON.stringify(users));
    res.send(users);
};
function searchByFirstname(req, res) {
    var name = req.body.name;
    var allUser = new userModel_1.Users();
    var findUsers = allUser.searchStudentsByFirstname(name);
    console.log(findUsers);
    res.send(findUsers);
}
exports.searchByFirstname = searchByFirstname;
