"use strict";
exports.__esModule = true;
exports.userCookieRead = exports.userCookieWrite = void 0;
var secret_1 = require("./secret");
var jwt = require('jwt-simple');
var users_1 = require("../models/users");
function userCookieWrite(req, res, next) {
    try {
        var _a = req.body, email = _a.email, role = _a.role;
        var allUsers = new users_1.Users();
        var user = allUsers.findUser(email);
        if (!user) {
            var _b = req.body, username = _b.username, role_1 = _b.role;
            var hashPassword = req.hashPassword;
            user = new users_1.User(username, email, hashPassword, role_1);
        }
        var cookieToWrite = JSON.stringify({ id: user.uuid });
        var token = jwt.encode(cookieToWrite, secret_1.secret);
        res.cookie("userInfo", token, { maxAge: 2000000, httpOnly: true });
        req.email = email;
        req.username = user.username;
        req.role = user.role;
        req.user = user;
        next();
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.userCookieWrite = userCookieWrite;
//to read the cookie
function userCookieRead(req, res, next) {
    try {
        var userInfo = req.cookies.userInfo;
        if (userInfo) {
            var decoded = jwt.decode(userInfo, secret_1.secret);
            var cookie = JSON.parse(decoded);
            var id = cookie.id;
            var allUsers = new users_1.Users();
            var user = allUsers.findUserById(id);
            req.username = user.username;
            req.email = user.email;
            req.role = user.role;
            next();
        }
        else {
            req.cookieExists = false;
            res.status(401).send({ cookieExist: req.cookieExists, message: 'The session has expired. Please log in again.' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.userCookieRead = userCookieRead;
