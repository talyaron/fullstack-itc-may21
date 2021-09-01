"use strict";
exports.__esModule = true;
exports.doLogInUserExists = exports.doRegUserExists = void 0;
var users_1 = require("../models/users");
function doRegUserExists(req, res, next) {
    try {
        var _a = req.body, username = _a.username, email = _a.email, role = _a.role;
        var allUsers = new users_1.Users();
        allUsers.users;
        var userExists = allUsers.findUser(email);
        if (userExists) {
            res.status(400).send('User already exist');
            return;
        }
        req.username = username;
        req.role = role;
        next();
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.doRegUserExists = doRegUserExists;
function doLogInUserExists(req, res, next) {
    try {
        var email = req.body.email;
        var allUsers = new users_1.Users();
        var userExists = allUsers.findUser(email);
        if (userExists) {
            res.status(400).send('User doesnt exist');
            return;
        }
        req.username = userExists.username;
        req.role = userExists.role;
        next();
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.doLogInUserExists = doLogInUserExists;
