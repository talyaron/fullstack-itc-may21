"use strict";
exports.__esModule = true;
exports.doesUserExist = void 0;
var readAllUsers = require('../models/usersModel').readAllUsers;
exports.doesUserExist = function (req, res, next) {
    var email = req.body.email;
    var allUsers = readAllUsers();
    var user = allUsers.find(function (user) { return user.email === email; });
    if (user) {
        res.status(400).send('User Already Exist');
        return;
    }
    next();
};
