"use strict";
exports.__esModule = true;
exports.sendCookie = void 0;
var jwt = require('jwt');
exports.sendCookie = function (req, res, next) {
    if (!req.cookies.myCookie) {
        var cookieBody = 'I have a cookie.';
        res.cookie('myCookie', cookieBody, { maxAge: 900000, httpOnly: true });
    }
    next();
};
