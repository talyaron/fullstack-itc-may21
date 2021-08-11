"use strict";
exports.__esModule = true;
exports.getUsers = void 0;
function getUsers(req, res) {
    console.log(req);
    var cookieName = req.cookies.cookieName;
    console.log(JSON.stringify(req.cookies));
    var cookie = JSON.parse(cookieName);
    res.send(cookie);
}
exports.getUsers = getUsers;
;
