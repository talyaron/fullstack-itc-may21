"use strict";
exports.__esModule = true;
exports.userCookieWrite = exports.userCookieRead = void 0;
// YS: Very nice!
function userCookieRead(req, res, next) {
    try {
        var userDetails = req.cookies.userDetails;
        if (!userDetails)
            throw new Error("Cookie was not found");
        var cookie = JSON.parse(userDetails);
        var username = cookie.username, email = cookie.email;
        req.username = username;
        req.email = email;
        next();
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.userCookieRead = userCookieRead;
function userCookieWrite(req, res, next) {
    try {
        var _a = req.body, username = _a.username, email = _a.email;
        if ((!username) || (!email))
            throw new Error("User details processing issues");
        var cookieToWrite = JSON.stringify({ username: username, email: email }); //YS: We don't want to add the users email in a cookie (security'
        res.cookie("userDetails", cookieToWrite, { maxAge: 900000, httpOnly: true });
        req.username = username;
        req.email = email;
        next();
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.userCookieWrite = userCookieWrite;
