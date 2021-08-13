"use strict";
exports.__esModule = true;
exports.readUserCookie = void 0;
function readUserCookie(req, res, next) {
    var userDetails = req.cookies.userDetails;
    if (userDetails) {
        var cookie = JSON.parse(userDetails);
        var username_1 = cookie.username, email_1 = cookie.email;
        req.username = username_1;
        req.email = email_1;
        next();
    }
    var _a = req.body, username = _a.username, email = _a.email;
    var cookieToWrite = JSON.stringify({ username: username, email: email });
    res.cookie('userDetails', cookieToWrite, { maxAge: 300000000, httpOnly: true });
    req.username = username;
    req.email = email;
    next();
}
exports.readUserCookie = readUserCookie;
