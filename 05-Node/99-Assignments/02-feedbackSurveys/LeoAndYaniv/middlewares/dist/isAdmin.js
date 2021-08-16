"use strict";
exports.__esModule = true;
exports.isAdmin = void 0;
var users_1 = require("../models/users");
function isAdmin(req, res, next) {
    try {
        var isUserAdmin = false;
        var allUsers = new users_1.Users(); //YS: Here you are creating a new instance of Users (different from the one you are using)
        var userIndex = allUsers.users.findIndex(function (user) { return user.email === req.email; });
        if ((userIndex !== -1)) { // user exists
            var userPass = allUsers.users[userIndex].password;
            if (userPass) { // have password => admin
                isUserAdmin = true;
            }
        }
        if (isUserAdmin)
            next();
        else
            res.status(401).send({ error: 'You are not authorized to open this page' });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}
exports.isAdmin = isAdmin;
