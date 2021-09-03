"use strict";
exports.__esModule = true;
exports.passCorrect = void 0;
var readAllUsers = require('../models/users').readAllUsers;
function passCorrect(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    var allUsers = readAllUsers();
    var user = allUsers.find(function (user) { return user.email === email; });
    if (user.password === password) {
        next(user);
    }
    else {
        console.log('tenes un error en la password');
    }
}
exports.passCorrect = passCorrect;
