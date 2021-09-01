"use strict";
exports.__esModule = true;
exports.sendCookieUser = void 0;
var readAllUsers = require('../models/users').readAllUsers;
var jwt = require('jwt-simple');
var secret = require('../secret/secret').secret;
function sendCookieUser(req, res, next) {
    var email = req.body.email;
    var allUsers = readAllUsers();
    var user = allUsers.find(function (user) { return user.email === email; });
    var cookie = user;
    var token = jwt.encode(cookie, secret);
    res.cookie('userITC', token, { maxAge: 900000000000, httpOnly: true });
    console.log(user);
    next();
}
exports.sendCookieUser = sendCookieUser;
;
