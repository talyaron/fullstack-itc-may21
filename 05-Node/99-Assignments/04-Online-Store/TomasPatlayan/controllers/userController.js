"use strict";
exports.__esModule = true;
exports.getUser = exports.userLogin = exports.userRegister = void 0;
var userModel_1 = require("../models/userModel");
var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
exports.userRegister = function (req, res) {
    try {
        var user = new userModel_1.User(req.body.id, req.body.name, req.body.email, req.body.password, []);
        if (req.body.name === "" &&
            req.body.email === "" &&
            req.body.password === "") {
            throw new Error("Please Fill the inputs");
        }
        var add = userModel_1.addUser(user);
        res.send({ ok: "Welcome " + req.body.name, allUser: add });
    }
    catch (error) {
        res.status(500).send({ error: "" + error });
    }
};
exports.userLogin = function (req, res) {
    try {
        //   let adminEmails = ["tomipatlayan@gmail.com", "tal@gmail.com"];
        // if (adminEmails.includes(req.body.email)) {
        //  console.log('pepe');
        // }
        var allUser = userModel_1.readUsers();
        var ifSome = allUser.some(function (element) { return element.email === req.body.email && element.password === req.body.password; });
        if (ifSome) {
            var foundUser = allUser.find(function (element) { return element.email == req.body.email && element.password === req.body.password; });
            res.cookie("cookieName", JSON.stringify(foundUser), {
                maxAge: 300303030,
                httpOnly: false
            });
            res.send(foundUser);
        }
        else {
            throw new Error('User not Found');
        }
    }
    catch (error) {
        res.status(404).send({ error: "" + error });
    }
};
exports.getUser = function (req, res) {
    var getCookie = JSON.parse(req.cookies.cookieName);
    console.log(getCookie);
    res.send(getCookie);
};
