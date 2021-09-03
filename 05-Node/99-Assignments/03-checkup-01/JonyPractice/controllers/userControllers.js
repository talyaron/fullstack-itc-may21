"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.login = exports.register = void 0;
var usersModel_1 = require("../models/usersModel");
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config();
var users = new usersModel_1.Users();
function register(req, res) {
    var _a = req.body, username = _a.username, email = _a.email, password = _a.password;
    var user = new usersModel_1.User(username, email, password);
    users.addUser(user);
    res.send({ users: users });
}
exports.register = register;
function login(req, res) {
    try {
        var _a = req.body, email = _a.email, password = _a.password;
        var user_1 = users.findUserByEmail(email);
        bcrypt.compare(password, user_1.password, function (err, result) {
            if (err) {
                throw new Error('Incorrect password');
            }
            if (result) {
                var token = jwt.sign({ id: user_1.id }, process.env.SECRET_KEY);
                res.send(__assign(__assign({}, user_1), { token: token }));
            }
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}
exports.login = login;
