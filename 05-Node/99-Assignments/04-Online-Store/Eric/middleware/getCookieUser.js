"use strict";
exports.__esModule = true;
exports.isAdmin = void 0;
function isAdmin(req, res, next) {
    var cookiUser = req.cookies.cookiUser;
    console.log(cookiUser);
    res.send(cookiUser);
    next();
}
exports.isAdmin = isAdmin;
