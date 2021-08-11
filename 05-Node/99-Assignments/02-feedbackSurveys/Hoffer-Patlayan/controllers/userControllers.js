"use strict";
exports.__esModule = true;
exports.getUsers = void 0;
function getUsers(req, res) {
    try {
        console.log(req);
        var cookieName = req.cookies.cookieName;
        console.log(cookieName);
        if (!cookieName)
            throw new Error('No cookie was found');
        var cookie = JSON.parse(cookieName);
        console.log(cookie);
        var name = cookie.name;
        console.log(name);
        res.send(cookie);
    }
    catch (e) {
        console.log(e);
        res.status(400).send({ error: "No cookie was found" });
    }
}
exports.getUsers = getUsers;
;
