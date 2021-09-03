"use strict";
exports.__esModule = true;
exports.sendCookie = void 0;
exports.sendCookie = function (req, res, next) {
    if (!req.cookies.myCookie) {
        var cookieBody = 'Was asked to create a cookie! Here it is';
        res.cookie('myCookie', cookieBody, { maxAge: 900000, httpOnly: true });
    }
    next();
};
