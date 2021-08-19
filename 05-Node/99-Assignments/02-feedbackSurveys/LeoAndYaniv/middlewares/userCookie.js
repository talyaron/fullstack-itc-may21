"use strict";
exports.__esModule = true;
exports.userCookieWrite = exports.userCookieRead = void 0;
var secret_1 = require("./secret");
var jwt = require('jwt-simple');
function userCookieRead(req, res, next) {
    try {
        var userDetails = req.cookies.userDetails;
        if (userDetails) {
            var decoded = jwt.decode(userDetails, secret_1.secret);
            var cookie = JSON.parse(decoded);
            var username = cookie.username, email = cookie.email;
            req.cookieExists = true;
            req.username = username;
            req.email = email;
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
function userCookieWrite(req, res, next) {
    try {
        //Get the information from the body
        var _a = req.body, username = _a.username, email = _a.email;
        if ((!username) || (!email))
            throw new Error("User details processing issues");
        //Here I set the cookie
        var cookieToWrite = JSON.stringify({ username: username, email: email });
        var token = jwt.encode(cookieToWrite, secret_1.secret);
        res.cookie("userDetails", token, { maxAge: 900000, httpOnly: true });
        req.cookieExists = true;
        req.username = username;
        req.email = email;
        //"Next" means that I will continue with the Route
        next();
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.userCookieWrite = userCookieWrite;
